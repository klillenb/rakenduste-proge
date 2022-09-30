const express =  require("express")
const morgan = require("morgan")
const helloRouter = require("./routes/hello.routes")

const app = express()
const PORT = 8080

app.use(morgan("dev"))
app.use(express.json()) // body-parser asemel

app.use("/hello", helloRouter)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("*", (req, res) => {
    res.send("404")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})