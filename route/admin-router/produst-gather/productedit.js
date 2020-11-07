//修改产品
const { Product } = require("../../../mongodb/product")
module.exports = async(req, res) => {
    let result = await Product.findOne({ "_id": req.query.id })
    res.render("./admin/products/productedit.ejs", {
        editDatas: result
    })
}