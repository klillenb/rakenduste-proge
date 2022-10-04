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

    // find first record with same name and update it
    const firstRecord = (element) => element === name

    const index = cats.findIndex(firstRecord)

    if(index !== -1){
        cats[index] = `${cats[index]}_updated`
    }
    res.send(cats)
}
exports.delete = (req, res) => {
    const { name } = req.params

    cats = cats.filter(cat => cat !== name)
    res.send(cats)
}