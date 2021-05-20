const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user7797:user7797@joel7797.9zkd6.mongodb.net/LIBRARY?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name : String,
    image : String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;