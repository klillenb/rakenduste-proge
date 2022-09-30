// CRUD with MongoDB
const mongoose = require("mongoose")

const doggoSchema = new mongoose.Schema({
    name:String
})
const Doggo = mongoose.model("Doggo", doggoSchema)

exports.create = async (req, res) => {
    const { name } = req.params

    const doggo = await Doggo.create({ name })

    res.send(doggo)
}
exports.read = async (req, res) => {
    const doggos = await Doggo.find({}, { _id: 0, __v: 0})
    res.send(doggos)
}
exports.update = (req, res) => {
    //
}
exports.delete = (req, res) => {
    //
}