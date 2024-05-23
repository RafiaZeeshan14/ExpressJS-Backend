const mongoose = require('mongoose'); 

// creating schema , the very first step : 

const todoSchema = mongoose.Schema({
    // initialize structured field which are required in your App also type.

    // takes id by default
    title: { type: String, required: true },
    
    desc: String ,  //if single defined field then can be define like this without object
    isEdit: { type: Boolean, default: 1 }
})

 const Todo = mongoose.model("Todo" , todoSchema);  //creating model of schema ("name of App created in database , it will plural itself" , Schema that is created )
module.exports = Todo; //name of model which we will call in controller or App