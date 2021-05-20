const { render } = require('ejs');
const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');

function adminrou(nav){
    adminRouter.get('/',function(req,res){
    res.render('add',{
        title : 'Add new data',
        nav
    })
})
    adminRouter.post('/add',function(req,res){
        var item= {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image
        }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
});
adminRouter.post('/adder',function(req,res){
    var item= {
        name : req.body.name,
        image : req.body.image
    }
var author = Authordata(item);
author.save();
res.redirect('/authors');
});
return adminRouter;
}
module.exports = adminrou;