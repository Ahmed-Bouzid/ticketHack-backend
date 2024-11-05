const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
	Departure: String,
	Arrival: String,
	date: Date,
	price: Number
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
