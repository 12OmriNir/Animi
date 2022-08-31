const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const queries = require('./queries.js');
const db = require('./db.js');
const uuid = require('uuid');

app.use(cors());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.connect(() => app.listen(80));

app.get('/api', async (req, res) => {
	let data = await queries.getTasks(req.query.search, req.query.filter);
	res.send(data.rows);
});

app.post('/api', async (req, res) => {
	let task = req.body;
	task.id = uuid.v4();
	await queries.addTask(task);
	res.send(task);
});

app.delete('/api', async(req, res) => {
	let data = await queries.deleteTask(req.query.id);
	res.send({rowsAffected: data.rowCount});
});

app.put('/api', async(req, res) => {
	let data = await queries.updateTask(req.body);
	res.send({rowsAffected: data.rowCount});
})

app.use(express.static(path.resolve(__dirname, '../client/build')));