const express = require('express')
const todos = require('../data')
// const getTodos = require('../controller')
// const createTodos = require('../controller')
// const updateTodos = require('../controller')
// const deleteTodos = require('../controller')
const todoRouter = express.Router()
const {getTodos , createTodos , updateTodos  , deleteTodos} =require("../controller.js")

todoRouter
.get("/" , getTodos)
.post("/" , createTodos)
.post("/add" , updateTodos)
.delete("/" , deleteTodos)

module.exports= todoRouter