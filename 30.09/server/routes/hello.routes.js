const express = require("express")
const router = express.Router()
const helloController = require("../controllers/cat.controller")

// middleware that is specific to this router
// takes the request, applies biz logic
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

// additional middleware layer
const getMiddleware = (req, res, next) => {
    console.log("Additional middleware")
    next()
}

router.get("/", getMiddleware, helloController.read)
router.post("/:name", helloController.create)
router.put("/:name", helloController.update)
router.delete("/:name", helloController.delete)

module.exports = router