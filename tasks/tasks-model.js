const db = require('../data/config')


// {
//     "id": 1,
//     "description": "search pinterest",
//     "notes": "make an account",
//     "completed": 0,
//     "project_id": 1
//   }
function getTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .where('p.project_id', id)
        .select('p.id', 'p.project_name')
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
   getTasks,
   getById,
   add,
};