const mongoose =require('mongoose')
signupSchema = new mongoose.Schema(

    {
        
            fname:String,
            lname:String,
            email:{
                    type: String,
                    required:true,
                    unique:true
            },
            bday:Date,
            gender:String,
            option1:String,
            address:String,
            country:String,
            phone:Number,
            pswd:{
                type:String,
                required:true
            },
            pswd1:{
                type:String,
                required:true
            }
        
    }

)
const signupModel=mongoose.model('signUp',signupSchema);
module.exports={signupModel};