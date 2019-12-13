const express = require('express');

const ProjectRouter = require('./routes/projects-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

//sanity check to see if server is running
server.get('/', (req, res) => {
    res.send('<h2>THE SERVER IS UP AND RUNNING</h2>')
})
module.exports = server;