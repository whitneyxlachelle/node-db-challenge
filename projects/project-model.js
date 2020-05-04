const db = require('../data/config')

function get() {
    return db('projects')
}

function getById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects')
    .insert(project)
    .then(id => {
        return getById(id[0]);
    })
}

module.exports = {
   get,
   getById,
   add,
};