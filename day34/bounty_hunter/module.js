var mongoose = require("mongoose");

var schema = mongoose.Schema;

var bountySchema = new schema ({
    firstName: {
        type : String,
        required: true
    },
    lastName: String,
    living: Boolean,
    bountyamount: Number,
    type: String,
});

module.exports = {
    bounty: mongoose.model('bounty',bountySchema),
    
}
