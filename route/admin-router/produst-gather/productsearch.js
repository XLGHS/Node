const { Product } = require("../../../mongodb/product")
module.exports = async(req, res) => {


    let page = Number(req.query.page) || 1

    // 每页多少条数据
    let size = Number(req.query.size) || 5

    let startpage = (page - 1) * size

    let min = req.query.price1 || 0
    let max = req.query.price2 || 999999999

    let result = await Product.find({
        title: new RegExp(req.query.title, "gi"),
        price: { $gt: min, $lt: max }
    }).limit(size).skip(startpage)



    let total = result.length

    // console.log(total);

    // 总页数
    let totalPage = Math.ceil(total / size)


    res.render("./admin/products/productsearch", {

        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        productListDatas: result,
    })

}