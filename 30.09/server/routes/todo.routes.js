const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")

// router.use((req, res, next) => {
//     const { name } = req.body

//     if (name !== "MINA") throw new Error("NOPE")

//     console.log("TIME: ", Date.now())
//     next()
// })

router.get("/", todoController.read)
router.post("/new", todoController.create)
router.put("/update", todoController.update)
router.delete("/delete", todoController.delete)

module.exports = router