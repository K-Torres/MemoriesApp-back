const express = require("express")
const router = express.Router()

const { getMemories, newMemory } = require("../controllers/memoriesController")

router.route("/memories").get(getMemories) 
router.route("/memories/new").post(newMemory) 

module.exports = router