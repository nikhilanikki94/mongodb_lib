const express =require('express');
const signupRouter =express.Router();
const {signupModel}=require('../models/signupModel');



function router(nav){
    signupRouter.route('/')
    .get((req,res)=>{
        res.render(
            'signUp',
            {
                nav,
                title:'SignUp'
            }
        )
    })
    signupRouter.route('/save')
    .post((req,res)=>{
        var signUp = new signupModel(req.body);
        signUp.save((error,data)=>{
            if(error){
                res.json({"status":"Error"});
                throw error
            }
            else{
                res.json({"status":"Success"});
            }
        })
    })
    signupRouter.get('/viewAllapi',(req,res)=>{
        signupModel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                res.send(data);
            }
        })
    })
    return signupRouter;

}
module.exports=router;