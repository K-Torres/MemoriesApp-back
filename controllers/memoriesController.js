const Memory = require("../models/memory")

exports.getMemories = async (req, res, next) => {
    const memories = await Memory.find()

    res.status(200).json({
        results: memories.length,
        data: memories
    })
}

exports.newMemory = async (req, res, next) => {
    const memory = await Memory.create(req.body)
    res.status(200).json({
        message : "Job created.",
        data: memory
    })
}

exports.updateMemory = async (req, res, next) => {
    const memory = await Memory.findByIdAndUpdate()
    res.status(200).json({
        message : "Job created.",
        data: memory
    })
}
