'use strict'

module.exports = function(app) {
    var cardController = require('../controllers/card_controller');
    var userController = require('../controllers/user_controller');


    //ROUTES FOR API
    // on routes that contain :table_id
    // ----------------------------------------------------
    app.route('/api/table/:table_id/cards/')
    .get(cardController.list_all_cards_with_table);

    //on routes that end in /cards
    // ----------------------------------------------------    
    app.route('/api/cards')
    .get(cardController.list_all_cards)
    .post(cardController.create_a_card);

    //on routes that end in :card_id
    app.route('/api/cards/:card_id')
    .delete(cardController.delete_a_card)
    .put(cardController.update_a_card);

    //on routes that end in /users/:username/:password
    app.route('/api/users')
    .get(userController.list_all_users)
};