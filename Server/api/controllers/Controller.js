'use strict';
var Game = require('../models/Game'); //created model loading here
var Player = require('../models/PLayer'); //created model loading here

var games = {};

/*
  using username in parameter, 
  create a new game state if not exist, else join an existing one 
  then return the game state. */
exports.joinNewGame = function(req, res) {
    let username = req.params.username;
    
    let game;

    var gamesWithoutOpponnent;
    for (var g in games) {
      if(games[g].players.length == 1)
      {
        gamesWithoutOpponnent = games[g];
        break;
      }
    }
    

    if(!gamesWithoutOpponnent) 
    {
      game = new Game();
      console.log("new game created by "+username+" with id "+game.gameid+", awaiting opponnent")
      games[game.gameid] = game;
    }
    else {
      game = gamesWithoutOpponnent;
      console.log(username+" joined game "+game.gameid+", may the odd be ever in your favor !")
    }

    game.players.push(new Player(username,0));
    if(game.players.length>2)throw "the game cant have more than 2 players ! But has "+game.players.length;

    res.json({game : game.getGameState(), methode : req.method});

};





/*get the current game state, 
using game id in parameter */
exports.getgame = function(req, res) {
  let gameid = req.params.gameid;
  let game = games[gameid];
  if(!game) throw 'invalidOperation, no game with this id';

  res.json({game : game.getGameState(), methode : req.method});
};




/*recieve a clicked edge, 
using game id, username and edge id in parameter */
exports.playTurn = function(req, res) {
  let gameid = req.params.gameid;
  let userName = req.params.username;
  let edgeId = parseInt(req.params.edgeid);//parse int

  let game = games[gameid];

  if(!game) throw 'invalidOperation : the game is not initialized';
  if(game.gameid != gameid) throw 'invalidOperation : the game id doesent match the current game';

  game.playTurn(userName, edgeId);

  res.json({game : game.getGameState(), methode : req.method});

};
