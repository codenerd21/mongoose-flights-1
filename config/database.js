const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/flights', 
  {
    useNewUrlParser: true, 
    useCreateIndex: true
  }
);

// Node has an EventEmitter on the connection object
// that allows us to listen to events.

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});



