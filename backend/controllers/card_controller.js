'use strict'

var mongoose = require('mongoose'),
  Card = mongoose.model('Card');

//get all cards
exports.list_all_cards = function(req, res) {
    Card.find({}, function(err, card) {
      if (err)
        res.send(err);
      res.json(card);
    });
  };
//insert a new card
exports.create_a_card = function(req, res) {
    var new_card = new Card(req.body);
    new_card.save(function(err, card) {
        if (err)
            res.send(err);
        res.json(card);
    });
  };
//delete a card
exports.delete_a_card = function(req, res) {
    Card.remove({
        _id: req.params.card_id
    }, function(err, card) {
        if (err) 
        res.send(err);
    res.json('Card successfully deleted');
    });
}

exports.update_a_card = function(req,res) {
    Card.findOneAndUpdate({_id: req.params.card_id}, req.body, {new: true}, function(err, card) {
        if (err)
            res.send(err);
        res.json('Card successfully updated');
    });
};



//get cards with specific table
exports.list_all_cards_with_table = function(req, res) {
  Card.find({table: req.params.table_id}, function(err, card) {
    if (err)
      res.send(err);
    res.json(card);
  });
};
