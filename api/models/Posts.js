const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:false,
    },
    lastname:{
        type: String,
        required:true,
        unique:false,

    },
    email:{
        type:String,
        required:false,
        unique:false,
    },
    number:{
        type:String,
        required:false,
        unique:false,
        
}},
    {timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);