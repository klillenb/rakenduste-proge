// CRUD with temp local DB

// example based on cats
let cats = ["Fluffy"]

exports.create = (req, res) => {
    const { name } = req.params

    cats.push(name)

    res.send(cats)
}
exports.read = (req, res) => {
    res.send("get")
}
exports.update = (req, res) => {
    const { name } = req.params

    cats = cats.map(cat => {
        if (cat === name) {
            return `${cat}_updated`
        }
        return cat
    })
    res.send(cats)
}
exports.delete = (req, res) => {
    const { name } = req.params

    cats = cats.filter(cat => cat !== name)
    res.send(cats)
}