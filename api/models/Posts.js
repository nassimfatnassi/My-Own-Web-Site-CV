const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    lastname:{
        type: String,
        required:true,

    },
    email:{
        type:String,
        required:false,
        unique:true
    },
    number:{
        type:String,
        required:false,
        unique:true
}},
    {timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);