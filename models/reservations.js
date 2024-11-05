const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
	isPayed: Boolean,
	trip: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
});

const Reservation = mongoose.model("reservations", reservationSchema);
module.exports = Reservation;
