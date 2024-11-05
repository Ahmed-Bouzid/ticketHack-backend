const mongoose = require("mongoose");

const connectionString = "mongodb+srv://waraibeatbox:sLboVHwkMnYXfzIG@mydatabase.dz9am.mongodb.net/tickethack";


mongoose
	.connect(connectionString, { connectTimeoutMS: 2000 })
	.then(() => console.log("Database connected"))
	.catch((error) => console.error(error));


    