let formidable = require("formidable");
const { Product } = require("../../../mongodb/product")
let path = require("path")
    // console.log(formidable);
module.exports = (req, res) => {
    let form = new formidable.IncomingForm()
    form.uploadDir = path.join(__dirname, "../", "../", "../", "public", "uploads");

    form.keepExtensions = true

    form.parse(req, async(err, fields, files) => {
        if (!files.pic.name) {
            var result = await Product.updateOne({ "_id": req.query.id }, {
                title: fields.title,
                postage: fields.postage,
                price: fields.price,
                content: fields.content,
            })
        } else if (files.pic.name) { //修改了图片
            var result = await Product.updateOne({ "_id": req.query.id }, {
                title: fields.title,
                pic: files.pic.path.split("public")[1],
                postage: fields.postage,
                price: fields.price,
                content: fields.content
            })
        }
        if (result) {
            res.redirect("/admin/productlist")
        }
    })
}