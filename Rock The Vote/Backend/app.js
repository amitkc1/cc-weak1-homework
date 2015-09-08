var express = require('express');
var cors = require('cors');
var uuid = require('node-uuid');
var app =express();
var bodyParser= require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var tokenId=[{
    
}]


var politicalIssues=[{
    "title": "Health Care",
    "description": "The nation's health care system is once again in the spotlight as part of President Obama's policy agenda.Growing numbers of Americans are uninsured; costs keep rising (annual growth rate, 6.7%); and the public is increasingly worried about the issue. The U.S. spends more money on health care than any other nation. By 2017, we will be spending about $13,000 per person, according to the annual projection by the Centers for Medicare & Medicaid Services.",
    "votes":"0",
    "user":"amitkc",
    "id":"12345"
},
{
    "title":"NSA Surveillance",
    "description":"Under a provision of the Patriot Act the NSA is allowed to collect phone metadata — the numbers, time stamps, and duration of a call, but not its actual content. Opponents include civil liberties advocates and Senator Rand Paul who argue that the collection is unconstitutional since it is done without a warrant. Supporters of the collection argue that the collection is necessary to track suspected terrorists.",
    "votes":"0",
    "user":"jacob",
    "id":"67890"
}]

//app.all('/votelist', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();
// });

app.get("/votelist",function(req,resp){
    resp.send(politicalIssues);
})

app.post("/votelist",function(req,resp){
    id =uuid.v1();
    req.body.id=id;
    if(!req.body.title||!req.body.description||!req.body.votes){
        resp.send("Title , description and votes are required fields");
    }
    politicalIssues.push(req.body);
    resp.send(politicalIssues);
})

app.put("/votelist",function(req,resp){
    if(!req.body.id){
        resp.send("Id is required to update the endpoint..!");
    }
    else{
        for(var i=0;i<politicalIssues.length;i++){
            if(politicalIssues[i].id==req.body.id){
                    politicalIssues[i].title=req.body.title;
                    politicalIssues[i].description=req.body.description;
                    politicalIssues[i].votes=req.body.votes;
                    politicalIssues[i].user=req.body.user;
                }
            }
        }
    resp.send(politicalIssues);
})

app.delete("/votelist",function(req,resp){
    if(!req.body.id){
        resp.send("Id is required to update the endpoint..!");
    }
    else{
        for(var j=0;j<politicalIssues.length;j++){
            if(politicalIssues[j].id==req.body.id){
                politicalIssues.splice(j,1);
            }
        }
    }
    resp.send(politicalIssues);
})

app.listen(8080);