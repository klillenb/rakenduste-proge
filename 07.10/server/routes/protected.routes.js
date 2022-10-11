const express = require("express")
const key = require("../secret")
const jwt = require("jsonwebtoken")
const router = express.Router()
// controller

// middleware
router.use((req, res, next) => {
    if(req.headers["authorization"]){
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, `${key}`, function(err, decoded) {
            if(err) throw new Error("SOMETHING BROKE :/")
            req.user = {
                username: decoded.username,
                email: decoded.email
            }
            next()
        })
    } else throw new Error("AUTH missing")
})

router.post()
router.get()

module.exports = router