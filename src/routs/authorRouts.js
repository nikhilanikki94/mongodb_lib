const express = require('express');
const authorRouter = express.Router();
const {addauthorModel}= require('../models/addAuthorModel');
var test=0;


function router(nav){


    authorRouter.route('/')
    .get((req,res)=>{
        addauthorModel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                test = data;
                res.render(
                    'authors',
                    {
                        nav,
                        title:"Authors",
                        authors:data
                    }
                )
            }
        })
    })

    authorRouter.route('/addauthor')
    .get((req,res)=>{
        res.render('addAuthor',
        {
            nav,
            title:"Add Author"
        })
    })
    authorRouter.route('/save')
    .post((req,res)=>{
        var author = new addauthorModel(req.body);
        author.save((error,data)=>{
            if(error){
                res.json({"status":"Error"});
                throw error
            }
            else{
                res.json({"status":"success"});
            }
        })
    })


    authorRouter.route('/viewAllapi',(req,res)=>{
        addauthorModel.find((error,data)=>{
            if(error)
            {
                throw error;
            }
            else{
                res.send(data);
            }
        })
    })

    authorRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;
        res.render(
            'author',
            {
                nav,
                title:"Author",
                author:test[id]
            }
        )
    })
    return authorRouter;
}

module.exports=router;