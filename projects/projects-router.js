const express = require('express');

const Projects = require('./project-model');
const router = express.Router();

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve projects' });
    });
});

router.post('/', (req, res) => {
  const projectInfo = req.body;

  Projects.add(projectInfo)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)

    .then(tasks => {
      if (tasks.length) {
        res.status(200).json(tasks)
      } else {
        res.status(404).json({ message: 'error' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrieve tasks' })
    })
})


module.exports = router;