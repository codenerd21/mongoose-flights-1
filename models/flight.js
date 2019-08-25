const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  departs: {
    type: Date,
    //if empty string - may need to refactor
    default: new Date(new Date().setFullYear(new Date().getFullYear() +1))
  }
}, {
  timestaps: true
});

// Compile Schema into a Model and Export
// First Argument is name of model
// Second Argument is name of Schema you are compiling into Model

module.exports = mongoose.model('Flight', flightSchema);