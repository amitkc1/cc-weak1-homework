var express = require('express')
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var userEmails=['amitkcpvg@gmail.com']
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get("/",function(req,res){
    res.send("<h1>Death Star Tours</h1><img src='earth.png'><input placeholder='enter your email'><button>Send me info</button>");
})

app.post("/",function(req,res){
    userEmails.push(req.body.email);
})

app.get("/login",function(req,res){
    res.send("Information has been sent to ")
})
