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
    adminRouter.get('/add',function(req,res){
        var item= {
            title : req.query.title,
            author : req.query.author,
            genre : req.query.genre,
            image : req.query.image
        }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
});
adminRouter.get('/adder',function(req,res){
    var item= {
        name : req.query.name,
        image : req.query.image
    }
var author = Authordata(item);
author.save();
res.redirect('/authors');
});
return adminRouter;
}
module.exports = adminrou;