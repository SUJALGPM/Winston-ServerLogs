const mongoose = require("mongoose");


//Configure database connection with mongodb atlas...
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`NODEJS-CONCEPT Successfully Connected to Mongodb Atlas Database...`.bgGreen.white);
    } catch (err) {
        console.log(`Mongo server ${err}`.bgRed.white);
        console.log(`NODEJS-CONCEPT Failed to connect to Database...`.bgRed.white);

    }
}

module.exports = connectDB;