const mongoose = require('mongoose');


addauthorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        }, 
        country:
        {
                type:String,
                required:true
        },
        age:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    }
);
const addauthorModel = mongoose.model('author',addauthorSchema)

module.exports = {addauthorModel};