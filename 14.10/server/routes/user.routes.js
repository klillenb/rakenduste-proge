const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const { body } = require("express-validator")

router.post(
    "/signup",
    body("username").not().isEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
    userController.signup)
router.post(
    "/login",
    body("username").not().isEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
    userController.login)

module.exports = router