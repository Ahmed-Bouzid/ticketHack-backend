var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
const moment = require("moment");
require("../models/connection");

// router.post("/one", (req, res) => {
// 	const departure = req.body.departure;
// 	const arrival = req.body.arrival;
// 	const date = req.body.date;

// 	// Trip.findById("672b54c4eb337a24c4006a15").then((data) => {
// 	// 	res.json({ result: data });
// 	// });

// 	Trip.find().then((data) => {
// 		res.json({ result: data });
// 	});
// });

//route pour modifier les element en isBooked true

// router.post("/search/:departure/:arrival/:date", (req, res) => {
// 	const { departure, arrival, date } = req.params;
// 	console.log(req.params);

// 	Trip.find({
// 		departure: new RegExp(departure, "i"),
// 		arrival: new RegExp(arrival, "i"),
// 		date: {
// 			$gte: moment(date).startOf("day"),
// 			$lte: moment(date).endOf("day"),
// 		},
// 	}).then((trips) => {
// 		if (trips.length > 0) {
// 			res.json({ result: true, trips });
// 		} else {
// 			res.json({ result: false, error: "No trip found" });
// 		}
// 	});
// });

router.post("/", (req, res) => {
	console.log(req.body.departure, req.body.arrival);

	Trip.find({
		departure: new RegExp(req.body.departure, "i"),
		arrival: new RegExp(req.body.arrival, "i"),
		date: {
			$gte: moment(req.body.date).startOf("day").toDate(),
			$lte: moment(req.body.date).endOf("day").toDate(),
		},
	}).then((trips) => {
		res.json({ result: true, element: trips });
	});
});

router.put("/book", (req, res) => {
	Trip.updateOne({ id: req.body }, { isBooked: true }).then(() => {
		Trip.findOne({ _id: req.body.id }).then((value) => {
			console.log();

			res.json({ data: value.departure });
		});
	});
});

module.exports = router;
