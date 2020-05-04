const express = require('express');
const projectsRouter = require('../projects/projects-router');

const server = express();

server.use(express.json());
server.use("/projects", projectsRouter);

module.exports = server;