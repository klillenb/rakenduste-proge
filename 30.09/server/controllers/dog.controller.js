// CRUD with MongoDB
const mongoose = require("mongoose")

const doggoSchema = new mongoose.Schema({
    name:String
})

// default findOneAndUpdate doesn't increment versionKey (__v), applied middleware
doggoSchema.pre('findOneAndUpdate', function() {
    const update = this.getUpdate();
    if (update.__v != null) {
      delete update.__v;
    }
    const keys = ['$set', '$setOnInsert'];
    for (const key of keys) {
      if (update[key] != null && update[key].__v != null) {
        delete update[key].__v;
        if (Object.keys(update[key]).length === 0) {
          delete update[key];
        }
      }
    }
    update.$inc = update.$inc || {};
    update.$inc.__v = 1;
});

const Doggo = mongoose.model("Doggo", doggoSchema)

exports.create = async (req, res) => {
    const { name } = req.params

    // missing error handling
    const doggo = await Doggo.create({ name })

    res.send(doggo)
}
exports.read = async (req, res) => {

    // missing error handling
    const doggos = await Doggo.find({}, { _id: 0, __v: 0})

    res.send(doggos)
}
exports.update = async (req, res) => {
    const { name } = req.params

    // missing error handling
    const doggo = await Doggo.findOneAndUpdate({ name }, { name: `${name}_updated` }, { new: true })

    res.send(doggo)
}
exports.delete = async (req, res) => {
    const { name } = req.params

    // missing error handling
    const doggo = await Doggo.findOneAndDelete({ name })

    res.send(doggo)
}
