const mongoose = require('mongoose');

const connectDB = () => {

    mongoose.connect(process.env.DB_URI).then(conn => {
        console.log(`Connected: ${conn.connection.host}`)
    })
}

module.exports = connectDB