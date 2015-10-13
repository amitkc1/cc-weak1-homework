var mongoose = require('mongoose');
var schema = mongoose.Schema;
var carSchema = new schema({
    model:{
        type:String,
        required:true
    },
    
    year:String,
    price:Number

});

var personSchema = new schema({
    name:{
        type:String,
        required:true
    },
    carsOwned:[{type:schema.Types.ObjectId, ref:'cars'}]
});

module.exports = {
    cars:mongoose.model('cars',carSchema),
    persons:mongoose.model('person',personSchema)
};