const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
	Departure: String,
	Arrival: String,
	Date: Date,
	Price: Number,
	isBooked: Boolean,
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;
