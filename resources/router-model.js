const db = require('../data/config')

function get() {
    return db('resources')
}

function getById(id) {
    return db('resources')
        .where({ id })
        .first();
}

function add(resource) {
    return db('resources')
    .insert(resource)
    .then(id => {
        return getById(id[0]);
    })
}

module.exports = {
   get,
   getById,
   add,
};