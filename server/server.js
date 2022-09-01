const express = require('express');
const cors = require('cors');
const { addProduct, deleteProduct, getProducts, getProductsByCategory, getProductsByOrigin, getProductsByCharecter, getProductsByPriceRange } = require('./queries')
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000

app.use(cors());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/api/products", async (req, res) => {
	getProducts(req, res)
});

app.post("/api/product", async (req, res) => {
	addProduct(req, res)
});


app.delete("/api/product/:id", async (req, res) => {
	deleteProduct(req, res)
});

app.get("/api/products/:category", async (req, res) => {
	getProductsByCategory(req, res)
})

app.get("/api/products/:origin", async (req, res) => {
	getProductsByOrigin(req, res)
})

app.get("/api/products/:charecter", async (req, res) => {
	getProductsByCharecter(req, res)
})

app.get('/api/products/:minPrice/:maxPrice', async (req, res) => {
	getProductsByPriceRange(req, res)
})

app.listen(PORT, function (err) {
	if (err) {
		console.log("Error in server setup");
	}
	console.log("Server listening on Port", PORT);
});