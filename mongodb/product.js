const mongoose = require("mongoose")
require("./db")

const ProductSchema = new mongoose.Schema({
    //产品名
    title: {
        type: String,
        required: [true, "产品名不能为空"],
        trim: true
    },
    // 图片
    pic: {
        type: String,

    },
    //邮费
    postage: {
        type: String,

    },
    //一级分类
    cate_id: {
        type: Number,

    },
    //二级分类
    goods_id: {
        type: String
    },
    //价格
    price: {
        type: String,

    },
    //详情
    content: {
        type: String
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product
}