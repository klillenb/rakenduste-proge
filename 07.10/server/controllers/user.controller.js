const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const saltRounds = 10

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

exports.signup = async (req, res) => {
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
    const { username, email, password } = req.body
    const existingUser = await User.findOne({ email, username })
    if(existingUser){
        if(await bcrypt.compare(password, existingUser.password)){
            const token = jwt.sign({
                username: existingUser.username,
                email: existingUser.email
            }, "testing", {expiresIn: "1h"})
            res.send(`LOGGED IN ${token}`)
        } else {
            res.send("WRONG PASSWORD")
        }
    } else {
        res.send("User doesn't exist")
    }
}
