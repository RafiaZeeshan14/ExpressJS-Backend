const express = require('express')
const todos = require('../data')
const getTodos = require('../controller')
const todoRouter = express.Router()


todoRouter
.get("/" , getTodos)
.post("/" , (req,res)=>{res.send("post todos")})
.post("/add" , (req,res)=>{res.send("post add todos")})
.delete("/" , (req,res)=>{res.send("delete todos")})

module.exports= todoRouter