const db = require('../data/config')


function get() {
    return db('tasks')
}

function getById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function add(task) {
    return db('tasks')
        .insert(task)
        .then(id => {
            return getById(id[0]);
        })
}

module.exports = {
    get,
    getById,
    add,
};