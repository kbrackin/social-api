const { asyncScheduler, async } = require('rxjs')
const { Thought, User, Reaction } = require('../models')

const getAllThoughts = async (req,res) => {
    try {
        const thought = await Thought.find()
        res.status(200).json(thought)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getThoughtById = async (req,res) => {
    try {
        const thought = await Thought.findOne()
        res.status(200).json(thought)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addThought = async (req,res) => {
    try {
        const thought = await Thought.create(req.body)
        res.status(200).json(thought)
    } catch (error) {
        res.status(500).json(error)
    }
}

const delThoughtById = async (req,res) => {
    try {
        const thought = await Thought.deleteOne({
            _id: req.params.thoughtId
        })
        res.status(200).json(thought)
    } catch (error) {
        res.status(500).json(error)
    }
}

const putThoughtById = async(req,res) => {
    try {    
        const thought = await Thought.updateOne(
            { _id: req.params.thoughtId },
            { $set: req.body}
        )
    res.status(200).json(thought)
    } catch (err) {
            res.status(500).json(err)
    }
}

module.exports = { getAllThoughts, getThoughtById, addThought, delThoughtById, putThoughtById}