const express =require('express');
const booksRouter=express.Router();
const {addbookModel} = require('../models/addbookModel');
var test = 0;


function router(nav){
    booksRouter.route('/')
    .get((req,res)=>{

         addbookModel.find((error,data)=>{

         
        if(error){
            throw error;
        }
        else{
            test=data;
            res.render(
                'books',
                {
                    nav,
                    title:"Books",
                    books:data
                }
            )
        }
    })
})

booksRouter.route('/addbook')
.get((req,res)=>{
    res.render(
        'addBook',
        {
            nav,
            title:"Add Books"
        }
    )
})
booksRouter.route('/save')
.post((req,res)=>{
    var books = new addbookModel(req.body);
    books.save((error,data)=>{
        if(error){
            res.json({"status":"Error"});
            throw error;
        }
        else{
            res.json({"status":"Success"});
        }
    })
})

booksRouter.get('/update',(req,res)=>{
    res.render('update',{
        nav,
        title:'Update Book'
    })
})

booksRouter.post('/delete',(req,res)=>{
    addbookModel.findOneAndDelete({'_id':req.body.ObjectId},(error,data)=>{
        if(error){
            res.json({"status":"Error"});
            throw error;
        }
        else if(!data)
        {
            res.json({"status":"Book is not Available"});
        }
        else{
            res.redirect("/books");
        }
    })
})
booksRouter.post('/modify',(req,res)=>{
    addbookModel.findOneAndUpdate({'_id':req.body._id},req.body,(error,data)=>{
        if(error){
            res.json({"status":"Error"})
            throw error;
        }
        else if(!data){
            res.json({"Status":"Book is not Available"})
        }

        else{
            res.json({"status":"Updated Successfully..."})
        }
    })
})
booksRouter.get('/viewAllapi',(req,res)=>{
    addbookModel.find((error,data)=>{
        if(error)
        {
            throw error
        }
        else{
            res.send(data);
        }
    })
})
booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;

     res.render(
         'book',
         {
             nav,
             title:"Book",
             book:test[id]
         }
     )
     
})
return booksRouter;
}
module.exports=router;