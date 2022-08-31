const db = require('./db.js');

function addTask(task) {
    return db.query('INSERT INTO todolist.t_tasks VALUES($1, $2)', [task.id, task.title]);
}

function deleteTask(id) {
    return db.query('DELETE FROM todolist.t_tasks WHERE id=$1', [id]);
}

function getTasks(search, filter) {
    if(!search) search = '';
	search = '%' + search.toLowerCase() + '%';
    if(filter == 'COMPLETED') {
        return db.query('SELECT * FROM todolist.t_tasks WHERE completed=true AND LOWER(title) LIKE $1 ORDER BY id', [search]);
    }
    else if(filter == 'LEFT') {
        return db.query('SELECT * FROM todolist.t_tasks WHERE completed=false AND LOWER(title) LIKE $1 ORDER BY id', [search]);
    }
    else {
        return db.query('SELECT * FROM todolist.t_tasks WHERE LOWER(title) LIKE $1 ORDER BY id', [search]);
    }
}

function updateTask(task) {
    return db.query('UPDATE todolist.t_tasks SET completed=$1 WHERE id=$2', [task.completed || false, task.id]);
}

module.exports = {addTask, getTasks, deleteTask, updateTask};