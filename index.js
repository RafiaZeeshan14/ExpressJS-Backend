const express = require('express')
const todoRouter = require('./routes/todos')
const app = express()
const port = 5000
const cors = require("cors")

const dbConnect = require('./db')
// to get request data from post-man and convert it to json we use body parser:
const bodyParser = require("body-parser")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.get("/", (req, res) => {
    return res.send("server is running ");
})
app.use("/todo", todoRouter)

app.listen(port, async () => {
    await dbConnect();
    console.log(`server is running on ${port}`)
})

// todos Api
// app.get("/todos",(req,res)=>{
//     return res.send();
//     })

