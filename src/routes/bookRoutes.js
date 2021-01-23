const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');
function bookrou(nav){
 
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
            title:'Books',
            nav,
            books
        })
        });
    });

    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
            res.render("book",{
            title:'Book',
            nav,
            book
        })
        });
    });

    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.deleteOne({_id: id})
        .then(function(){
            res.redirect("/books");
        })
    });

    booksRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
        res.render('updatebook',{
            title : 'Update book data',
            nav,
            book
        });
        });
    })

    booksRouter.get('/updated/:id',function(req,res){
        const id = req.params.id;
        var item= {
                    title : req.query.title,
                    author : req.query.author,
                    genre : req.query.genre,
                    image : req.query.image
                }
        Bookdata.updateOne({_id: id},item)
        .then(function(book){
        res.redirect('/books')

        });
    })



    return booksRouter;

}


module.exports = bookrou;