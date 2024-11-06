var express = require("express");
var router = express.Router();
const reservation = require("../models/reservations");
const Trip = require("../models/trips");

require("../models/connection");

//route pour afficher les elements qui sont 'isBooked : true'
router.post("/booked", (req, res) => {
	Trip.find.then(() => {
		let newReservation = new reservation({
			isPayed: false,
			trip: id,
		});
		newReservation.save().then(() => {
			res.json({ result: `saved` });
		});
	});
});

//route pour modifier les element en isPayed true
router.put("/payed", (req, res) => {
	reservation.updateMany({ _id: req.body }, { isPayed: true }).then(() => {
		res.json({ result: `Ticket is payed` });
	});
});

module.exports = router;
