var mongoose = require ('mongoose')

var schema = mongoose.schema;

var issueSchema = new schema({
    title:String,
    description:String,
    votes:String,
    user:String,
    id:Number

});


module.exports = {
    mongoose.model('User',issueSchema);
}