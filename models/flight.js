const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },  
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
    default: 5555
  },
  departs: {
    type: Date,
    required: true,
    default: new Date(new Date().setFullYear(new Date().getFullYear() +1))  
  },
  time: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);

