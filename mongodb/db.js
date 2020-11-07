const mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/hg-admin", { useNewUrlParser: true, useUnifiedTopology: true })

db.then(() => {
    console.log("成功");
}, () => {
    console.log("失败");
})

module.exports = {
    db
}