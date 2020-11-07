//商品列表
const { Product } = require("../../../mongodb/product")
module.exports = async(req, res) => {

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 5;

    let total = await Product.countDocuments({})

    let startPage = (page - 1) * size

    let totalPage = Math.ceil(total / size)

    const result = await Product.find({}).limit(size).skip(startPage)
        // console.log(result);

    res.render("./admin/products/productlist.ejs", {
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        productListDatas: result
    })
}