const Memory = require("../models/memory")

exports.getMemories = async (req, res, next) => {
    const memories = await Memory.find()
    res.status(200).json({
        results: memories.length,
        data: memories
    })
}

exports.getMemoryById = async (req, res, next) => {
    const memory = await Memory.findById(req.params.id)
    console.log(req.params)
    if (!memory) {
        return res.status(404).json({
            message: "Memory not found.",
            data: memory
        })
    }

    res.status(200).json({
        data: memory
    })
}

exports.newMemory = async (req, res, next) => {
    const memory = await Memory.create(req.body)
    res.status(200).json({
        data: memory
    })
}

exports.updateMemory = async (req, res, next) => {
    let memory = await Memory.findById(req.params.id)
    if (!memory) {
        return res.status(404).json({
            message: "Memory not found.",
            data: memory
        })
    }

    memory = await Memory.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        message: "Memory updated.",
        data: memory
    })
}

exports.deleteMemory = async (req, res, next) => {
    let memory = await Memory.findById(req.params.id)
    if (!memory) {
        return res.status(404).json({
            message: "Memory not found.",
            data: memory
        })
    }

    memory = await Memory.findByIdAndRemove(req.params.id)

    res.status(200).json({
        message: "Memory deleted.",
        sucess: true
    })
}
