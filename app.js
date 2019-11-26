const express=require('express');
const chalk=require('chalk');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = new express();

app.set('views','./src/views');



app.use(express.static(path.join(__dirname,"/public")));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({    
    extended: true
  }));

    
app.set('view engine','ejs');


var nav=[
    {link:'/',title:'Home'},
    {link:'/signUp',title:'SignUp'},
    {link:'/login',title:'Login'},
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'},
    {link:'/books/addBook',title:'Add Books'},
    {link:'/authors/addAuthor',title:'Add Authors'},
    {link:'/books/update',title:'Update /  Delete'}

];


const booksRouter = require('./src/routs/booksRouts')(nav); 
const authorRouter = require('./src/routs/authorRouts')(nav); 
const signupRouter = require('./src/routs/signupRouts')(nav);
const loginRouter = require('./src/routs/loginRouts')(nav);


app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signupRouter);
app.use('/login',loginRouter);


mongoose.connect("mongodb://localhost:27017/Library");


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:"Library"
    });       
});



app.listen(process.env.PORT || 3005,function(){
    console.log("Listening to Port"+chalk.red(" 3005"));
});