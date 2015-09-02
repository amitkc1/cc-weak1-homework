var express = require('express');
var app =express();
var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var todoList=[{
    "title": "The title",
    "description": "The description of the todo",
    "completed": false,
    "imageUrl": "http://www.myimage....",
    "_id": "23k4lh23h2"
}]

app.get("/todolist",function(req,res){
    res.send('<h1>This is header</h1>');
    res.send(todoList);
});


app.post("/todolist",function(req,res){
    req.body._id=generateId();
    todoList.push(req.body);
    res.send(todoList);
});

app.get("/todolist/:id",function(req,res){
    for(var i=0;i<todoList.length;i++){
        if(todoList[i].id==req.params.id){
            res.send(todoList[i]);
        }
    }
})
app.put("/todolist",function(req,res){
    
    for(var i=0;i<todoList.length;i++){
        if(todoList[i].id==req.body.id){
            todoList[i].title=req.body.title;
            todoList[i].description=req.body.description;
            todoList[i].imageUrl=req.body.imageurl;
            todoList[i].checked=req.body.checked;
            todoList[i].id=req.body.id
        }
    }
    res.send(todoList)
});

app.delete("/todolist",function(req,res){
                                  
    for(var i=0;i<todoList.length;i++){
        if(todoList[i].id==req.body.id){
            todoList.splice(i,1)
            res.send(todoList);
        }
    }
});


function generateId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


app.listen(8081);