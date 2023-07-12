const express = require('express');
const server = express();

const recipeRouter = require('./recipe-router')

server.use(express.json())
server.use('/api/recipes', recipeRouter)


server.use('*', (req, res) => {
    res.json({api: "API in use"})
})

module.exports = server;