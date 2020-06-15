'use strict';
module.exports = function(app) {
  var gamecontroller = require('../controllers/Controller');

//Routes for testing
  app.route('/ping')
    .get((req, res)=> {
      res.json({ping : "pong", methode : req.method})}
      );
  app.route('/time')
    .get((req, res)=> {
      res.json({timestamp : (new Date(Date.now())).toLocaleString('fr-FR'), methode : req.method})}
      );
      
//real routes

  /*join a new game, 
  passing username in parameter, 
  create a new game state if not exist, else join an existing one 
  then return the game state.*/
  app.route('/new/:username')
    .get(gamecontroller.joinNewGame);

  /*get the current game state, 
  passing game id in parameter */
  app.route('/:gameid')
    .get(gamecontroller.getgame);

  /*post the clicked edge, 
  passing game id, username and edge id in parameter */
  app.route('/:gameid/:username/:edgeid')
    .post(gamecontroller.playTurn);
};
