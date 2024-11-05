var express = require('express');
var router = express.Router();
const Trip = require("../models/trips");
require("../models/connection");

router.post('/', (req, res) => {
    const element = {};

    if (req.body.departure) {
        element.departure = { $regex: new RegExp(req.body.departure, 'i') }; 
    }
    if (req.body.arrival) {
        element.arrival = { $regex: new RegExp(req.body.arrival, 'i') }; 
    }
    if (req.body.date) {
        element.date = req.body.date;
    }

    Trip.find(element)
        .then(dbData => {
            if (dbData.length === 0) {
                res.status(404).json({ message: "Aucun trajet" });
            } else {
                res.json({ trips: dbData });
            }
        })
});


router.post('/id', (req, res) => {
  Trip.findById(req.body.id)
     .then(dbData => {
      res.json({selected: dbData})
    })
  });

module.exports = router;



