const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user7797:user7797@joel7797.9zkd6.mongodb.net/LIBRARY?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;