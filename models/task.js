const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true,
        trim: true,
        maxlength:[20 , 'name can not be more than 20 charactersv ']
    },
    completed:Boolean
})



module.exports = mongoose.model('Task' , TaskSchema)
