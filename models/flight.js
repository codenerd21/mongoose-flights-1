const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  flightNo: Number,
  departs: Date
});

// Compile Schema into a Model and Export
// First Argument is name of model
// Second Argument is name of Schema you are compiling into Model

module.exports = mongoose.model('Flight', flightSchema);