'use strict'

//grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var cardSchema = new Schema({
    table: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});

//the schema is useless so far
//we need to create a model using it
var Card = mongoose.model('Card', cardSchema);

//make this available to our Node application
module.exports = Card;