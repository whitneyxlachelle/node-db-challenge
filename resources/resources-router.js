const express = require('express');

const Resources = require('../resources/router-model');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.get()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve resources' });
        });
});

router.post('/', (req, res) => {
    const resourceInfo = req.body;

    Resources.add(resourceInfo)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

module.exports = router;