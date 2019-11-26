const mongoose=require('mongoose');

const addbookSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        genre:{
            type:String,
            required:true
        },
       
        image:String
    }

);
const addbookModel= mongoose.model('books',addbookSchema);
module.exports={addbookModel};