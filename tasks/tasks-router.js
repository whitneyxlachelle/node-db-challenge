const express = require('express');

const Tasks = require('../tasks/tasks-model');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.get()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve tasks ' });
        });
});

router.post('/', (req, res) => {
    const taskInfo = req.body;

Tasks.add(taskInfo)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});

module.exports = router;