const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
	Departure: String,
	Arrival: String,
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
