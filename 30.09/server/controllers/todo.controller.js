const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: String,
    date: Date,
    importance: Number,
    completed: Boolean
})

// default findOneAndUpdate doesn't increment versionKey (__v), applied middleware
todoSchema.pre('findOneAndUpdate', function() {
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

const Todo = mongoose.model("Todo", todoSchema)

exports.create = async (req, res) => {
    const { title, date, importance, completed } = req.body

    const todo = await Todo.create({ title, date, importance, completed })

    res.send(todo)
}
exports.read = async (req,res) => {
    const todo = await Todo.find({}, {})

    res.send(todo)
}
exports.update = async (req, res) => {
    const { title } = req.body

    const todo = await Todo.findOneAndUpdate(
        { title },
        { completed: true },
        { new: true }
    )

    res.send(todo)
}
exports.delete = async (req, res) => {
    const { title } = req.body

    const todo = await Todo.findOneAndDelete({ title })

    res.send(todo)
}