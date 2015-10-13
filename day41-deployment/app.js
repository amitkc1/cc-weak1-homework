var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname+"/public")));
app.set('views',__dirname+'/public/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.get('/',function(req,resp){
    resp.render('index.html',{prod:"http://10.101.10.10"});
})

app.listen(7272);