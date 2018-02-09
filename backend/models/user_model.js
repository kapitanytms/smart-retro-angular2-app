'use srtict'

//grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var userSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//the schema is useless so far
//we need to create a model using it
var User = mongoose.model('User', userSchema);

//make this available to our Node application
module.exports = User;
