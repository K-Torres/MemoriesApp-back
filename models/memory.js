const mongoose = require("mongoose")

const memoryScheme = new mongoose.Schema({
    tittle: {
        type: String,
        require: [true, "Please enter a tittle."],
        trim: true,
        maxLength: [50, "The tittle can not exceed 50 characters."]
    },
    description: {
        type: String,
        require: [true, "Please enter a description."],
    },
    imageUrl: String,
    UserId: String
})

module.exports = mongoose.model("Memory", memoryScheme)