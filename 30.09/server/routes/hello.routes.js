const express = require("express")
const router = express.Router()
const helloController = require("../controllers/hello.controller")

// middleware that is specific to this router
router.use((req, res, next) => {
    const { name } = req.body

    if (name !== "MINA") throw new Error("NOPE")

    req.user = {
        name: "MINA",
        role: "Owner"
    }
    console.log("TIME: ", Date.now())
    next()
})

const getMiddleware = (req, res) => {
    
}

router.get("/", helloController.read)
router.post("/", helloController.create)
router.put("/", helloController.update)
router.delete("/", helloController.delete)

module.exports = router