// 添加产品提交数据的地址
let formidable = require("formidable")
const { Product } = require("../../../mongodb/product")
let path = require("path")
module.exports = (req, res) => {
    let form = new formidable.IncomingForm()

    form.uploadDir = path.join(__dirname, "../", "../", "../", "public", "uploads")

    form.keepExtensions = true

    form.parse(req, async(err, fields, files) => {
        // console.log(fields);
        // console.log(files);

        let result = await Product.create({
            title: fields.title,
            pic: files.pic.path.split("public")[1],
            cate_id: fields.cate_id,
            goods_id: fields.goods_id,
            postage: fields.postage,
            price: fields.price,
            content: fields.content
        })
        if (result) {
            res.redirect("/admin/productlist")
        }
    })

}