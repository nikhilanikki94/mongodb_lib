const express =require('express');
const loginRouter =express.Router();
const {signupModel}=require('../models/signupModel');



function router(nav){
    loginRouter.route('/')
    .get((req,res)=>{
        res.render(
            'login',
            {
                nav,
                title:'Login'
            }
        )
    })
    
    loginRouter.post('/validate',async (req,res)=>{
        var email=req.body.email;
        var password=req.body.pswd;
        await signupModel.findOne({$and:[{'email':email},{'pswd':password}]},(error,data)=>{
            if(error){
                res.json({"status":"Error"});
                throw error;
            }
            else if(!data){
                res.json({"status":"Invalid email Id or Password"});
                 
            }
            else{
                res.json({"status":"Successfully Logged In.."});
            }

        })
    })

    loginRouter.get('/viewAllapi',(req,res)=>{
        signupModel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                res.send(data);
            }
        })
    })
    return loginRouter;

}
module.exports=router;