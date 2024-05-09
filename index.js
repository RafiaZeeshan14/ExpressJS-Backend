console.log("first")

const express = require('express')
const todoRouter = require('./routes/todos')
const app = express()
const port = 5000
const cors = require("cors")

app.use(cors())
app.get("/", (req, res) => {
    return res.send([{ data: "helloworld" }]);
})
app.use("/todo", todoRouter)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

// todos Api
// app.get("/todos",(req,res)=>{
//     return res.send();
//     })

