var Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
};

function index(req, res) {
  Flight.find({}).sort('departs').exec(function(err, flights) {
    res.render('flights/index', {
      flights
    });
  });
};

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var flight = new Flight(req.body);
  flight.save(function(err) {
    if (err)
      return res.render('flights/new');
    res.redirect('/flights');
  });
};

function newFlight(req, res) {
    res.render('flights/new');
};

