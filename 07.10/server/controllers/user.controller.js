const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const key = require("../secret")
const { validationResult } = require("express-validator")
const saltRounds = 10

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
}, {timestamps: true})

const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, require: true }
})

const User = mongoose.model("User", userSchema)
const Post = mongoose.model("Post", postSchema)

exports.signup = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, email, password } = req.body
    const existingUser = await User.findOne({ email })
    if(existingUser) return res.send("User already exists")

    // const hash = await bcrypt.hash(password, saltRounds)
    const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, saltRounds)
    })
    res.send(user)
}

exports.login = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, email, password } = req.body
    const existingUser = await User.findOne({ email, username })
    if(!existingUser) return res.send("User doesn't exist")
    if(!await bcrypt.compare(password, existingUser.password)) return res.send("WRONG PASSWORD")
    const token = jwt.sign({
        username: existingUser.username,
        email: existingUser.email
    }, `${key}`, {expiresIn: "1h"})
    res.send(`LOGGED IN ${token}`)
}
