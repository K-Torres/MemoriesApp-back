const mongoose = require('mongoose');

const connectDB = () => {

    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(conn => {
        console.log(`Connected: ${conn.connection.host}`)
    })
}

module.exports = connectDB