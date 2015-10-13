var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/cars');
//mongoose.connect('mongodb://localhost/persons');
var cars = require('./module.js').cars;
var persons = require('./module.js').persons;
var app = express();
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/cars',function(req,resp){
    cars.find({},function(err,data){
        if(err){
            resp.status(404).send(err);
        }
        resp.send(data);
    })

})

app.post('/cars',function(req,resp){
    console.log(req.body);
    var carList = new cars(req.body);
    carList.save(function(err,data){
        if(err){
            resp.status(403).send("err");
        }
        resp.status(200).send(data);
    })
});

app.put('/cars/:carId',function(req,resp){
    cars.findOneAndUpdate({_id:req.params.carId},req.body,function(err,data){
        if(err){
        req.status(403).send(err);
      }
        resp.status(200).send();      
    });
//    cars.findById(req.params.id,function(err,data){
//      if(err){
//        req.status(403).send(err);
//      }
//      data = req.body;
//      data.save();
//
//    })
});

app.delete('/cars/:carId',function(req,resp){
  cars.findOne({"_id":req.params.carId},function(err,data){
    if(err){
        req.status(403).send(error);
    }
    if(data){
        data.remove();
        data.save();
        resp.status(200).send(data);
    }
  
  }
)});

app.get('/persons',function(req,resp){
    persons.find({}).populate('carsOwned').exec(function(err,person){
        if(err)
            resp.status(403).send(err);
        resp.status(200).send(person);
    })
});

app.post('/person',function(req,resp){
    var personList = new persons(req.body);
    
    personList.save(function(err,data){
        if(err){
            resp.status(403).send("Error");
        }
        resp.status(200).send(data);
    })
});


app.listen(8082);