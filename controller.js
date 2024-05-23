//Controllers

const todos = require("./data")
const Todo = require("./models/todo")

function getTodos(req, res) {
    res.send(todos)
}
// module.exports=getTodos

//using this function to create todos and save in database 
async function createTodos(req, res) {
    // in req data is coming from Postman raw-data
    console.log(req.body)
    const { title , desc} = req.body // destructuring coming data
// save todo in database , these are coming from todoSchema which we created in model
    const resp = await Todo.create({
        title: title,
        desc: desc
    })
    console.log(resp);
    res.send(resp)  // sending the response
}
// module.exports=createTodos

function updateTodos(req, res) {
    res.send("add todos")
}
// module.exports=updateTodos

function deleteTodos(req, res) {
    res.send("delete todos")
}
// module.exports=deleteTodos

module.exports = { getTodos, createTodos, updateTodos, deleteTodos }