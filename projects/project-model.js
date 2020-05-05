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

function getTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .where('t.project_id', id)
        .select(
            'p.project_name',
            'p.description',
            't.id',
            't.description',
            't.notes',
            't.completed',
            )
}

module.exports = {
   get,
   getById,
   add,
   getTasks,
};