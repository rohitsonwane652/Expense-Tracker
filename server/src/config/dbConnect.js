const mongoose = require('mongoose')
require('dotenv').config();
const dbConnect = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`Connected Succesefully`);
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
};

module.exports = dbConnect;