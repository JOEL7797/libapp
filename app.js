const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

const nav= [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Author'
    },
    {
        link:'/admin',name:'ADD DATA'
    }
    
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);



app.use('/public',express.static(__dirname +'/public'));
app.set('view engine','ejs');
app.set('views','./src/views'); 
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",{
        title:'Library',
        nav,
    });
});

app.get('/login',function(req,res){
    res.render("login",{
        title:'Login',
        nav,
    });
});

app.get('/signup',function(req,res){
    res.render("signup",{
        title:'Sign-up',
        nav,
    });
});

app.listen(port,()=>{console.log("server ready at"+port)});
