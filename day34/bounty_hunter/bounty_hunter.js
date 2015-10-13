var express = require('express');
var app =  express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bountyhunter');  
var bounty = require('./module.js').bounty;
var uuid = require('node-uuid');
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var bountyList=[{
    "firstName": "Anjuta",
    "lastName": "Pall",
    "living": true,
    "bountyamount": "$5000",
    "type": "sith",
    "id":"21uyge237e6e89"
},{
    "firstName": "Aayla",
    "lastName": "Secura",
    "living": true,
    "bountyamount": "$10,000",
    "type": "Jedi",
    "id":"hcuerfh8934ur9"
}];

app.get("/bounty",function(req,res){
    res.send(bountyList);
})

app.get("/",function(req,res){
    res.send("<h1>Bounties:</h1>"+"<ul>"+"<li style='color:red'>"+bountyList[0].firstName+"</li></ul>")
})

app.get("/bounty/:firstName",function(req,res){
    bounty.find({firstName:req.params.firstName},function(err,data){
        if(err){
            res.status(403).send("Error occurred. ");
        }
        
        if(req.params.firstName===""){
            res.status(200).send("No bounty hunter found");
        }
        
        res.status(200).send(data);
    })
})

app.post("/bounty",function(req,res){
    console.log(req.body);
    var bountyList = new bounty(req.body);
    bountyList.save(function(err,data){
        if(err){
            res.status(403).send("err")
        }
        res.status(200).send(data);
    
    })
})


//app.post("/bounty",function(req,res){
//    req.body.id=uuid.v1();
//    bountyList.push(req.body);
//    res.send(bountyList);
//})

app.put('/bounty/:id',function(req,res){
    for(var bountyNumber=0;bountNumber<bountyList.length;bountyNumber++){
        
        if(bountyList[bountyNumber].id==req.params.id){
            bountyList[bountyNumber].firstName=req.body.firstName;
            bountyList[bountyNumber].lastName=req.body.lastName;
            bountyList[bountyNumber].living=req.body.living;
            bountyList[bountyNumber].bountyamount=req.body.bountyamount;
            bountyList[bountyNumber].type=req.body.type;
            bountyList[bountyNumber].id=req.body.id;
        }
    }
    res.send(bountyList);
})

app.delete('/bounty/:id',function(req,res){
    for(var i=0;i<bountyList.length;i++){
        if(bountyList[i].id=req.params.id){
            bountyList.splice(i,1);
        }
    }
    res.send(bountyList);
})

app.listen(8082)

