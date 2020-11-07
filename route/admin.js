const express = require("express");
const router = express.Router()

//登录
router.get("/login", require("./admin-router/user-gather/login"))

//验证登录
router.post("/dologin", require("./admin-router/user-gather/dologin"))

//用户列表
router.get("/userlist", require("./admin-router/user-gather/userlist"))

//添加用户
router.get("/adduser", require("./admin-router/user-gather/adduser"))

//添加用户提交数据的地址
//注意提交方式***Post
router.post("/doadduser", require("./admin-router/user-gather/doadduser"))

//修改用户信息
router.get("/edituser", require("./admin-router/user-gather/edituser"))

//点击确定修改按钮提交数据，更新数据库接口
router.post("/doedlituser", require("./admin-router/user-gather/doedlituser.js"))

//搜索用户
router.get("/searchuser", require("./admin-router/user-gather/searchuser"))

//退出
router.get("/logout", (req, res) => {
    req.session.destroy() //销毁session
    res.redirect("/admin/login")
})

//删除用户
router.post("/deleteuser", require("./admin-router/user-gather/deleteuser"))



//添加产品
router.get("/productadd", require("./admin-router/produst-gather/productadd"))

//添加产品提交数据的地址
//注意提交方式***Post
router.post("/doaddproduct", require("./admin-router/produst-gather/doaddproduct"))

//修改产品
router.get("/productedit", require("./admin-router/produst-gather/productedit"))

//点击确定修改按钮提交数据，更新数据库接口
router.post("/doeditproduct", require("./admin-router/produst-gather/doeditproduct.js"))

//产品列表
router.get("/productlist", require("./admin-router/produst-gather/productlist"))

//搜索产品
router.get("/productsearch", require("./admin-router/produst-gather/productsearch.js"))

//删除产品
router.get("/productdelete", require("./admin-router/produst-gather/productdelete.js"))





module.exports = router