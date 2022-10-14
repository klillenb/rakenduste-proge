const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")

router.get("/", todoController.read)
router.post("/new", todoController.create)
router.put("/update", todoController.update)
router.delete("/delete", todoController.delete)

module.exports = router