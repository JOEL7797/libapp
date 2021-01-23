const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/authordata');
function authorrou(nav){

authorsRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
    res.render("authors",{
        title:'Authors',
        nav,
        authors
    });
});
});


authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
        res.render("author",{
        title:'Author',
        nav,
        author
    })
    
    });
});

authorsRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    Authordata.deleteOne({_id: id})
    .then(function(){
        res.redirect("/authors");
    })
});


authorsRouter.get('/update/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
    res.render('updateauthor',{
        title : 'Update author data',
        nav,
        author
    });
    });
})



authorsRouter.get('/updated/:id',function(req,res){
    const id = req.params.id;
    var item= {
                name : req.query.name,
                image : req.query.image
            }
    Authordata.updateOne({_id: id},item)
    .then(function(author){
    res.redirect('/authors')

    });
})




return authorsRouter;
}
module.exports = authorrou;