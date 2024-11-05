var express = require("express");
var router = express.Router();
const reservation = require("../models/reservations");
require("../models/connection");

router.get("/", (req, res, next) => {
	reservation.find().then((element) => {
		console.log("test");
		res.json({ result: element });
	});
});



module.exports = router;
