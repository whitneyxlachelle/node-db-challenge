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

module.exports = router;