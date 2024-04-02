const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connection established...");
    } catch (error) {
        console.log("Database connection error : ", error);
    }
}

module.exports = connect; //default export in commonjs module system