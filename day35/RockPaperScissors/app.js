var express= require('express');
var app =  express();
var uuid = require('node-uuid');
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var playerNames=["Biz","Markie","Jr.","Amit","Jacob"]

var game={};
var players=[];
app.post("/joingame",function(req,res){
    

    if(req.body.min_players>3){
        res.send("Error: 3 players only");
    }
    
    else{
        id=uuid.v1();
        for(var i=1;i<minimumPlayers;i++){
            players.push(playerNames[i]);
            players.push(req.body.id);
        }
        game={
            "game_id":id,
            "players":players
        }
        res.send(game);
    }
    
})
//
//app.post("/turn",function(req,res){
//
//})

app.listen(8080);