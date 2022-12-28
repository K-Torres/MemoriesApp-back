const express = require("express")
const router = express.Router()

const { getMemories, newMemory, getMemoryById, updateMemory, deleteMemory } = require("../controllers/memoriesController")

router.route("/memories").get(getMemories) 
router.route("/memories/new").post(newMemory) 
router.route("/memories/:id").get(getMemoryById) 
router.route("/memories/:id").put(updateMemory) 
router.route("/memories/:id").delete(deleteMemory) 

module.exports = router