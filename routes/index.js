var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
require("../models/connection");



/* GET home page. */
router.get("/", function (req, res, next) {
	Trip.find().then((e) => {
		res.render({ e });
	});
});

module.exports = router;
