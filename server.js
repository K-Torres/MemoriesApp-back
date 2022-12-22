const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/database")
const memories = require("./routes/memories")
const app = express()

dotenv.config({ path: "./config/config.env" })

const PORT = process.env.PORT

connectDB()

app.use(express.json())

app.use("", memories)

app.listen(PORT, () => {
    console.log("server running")
    app.get("/", (req, res) => {
        res.send(`Testing at port: ${PORT}`)
    })
})