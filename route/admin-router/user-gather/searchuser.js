const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {

    // console.log(req.query);
    let page = req.query.page || 1

    // 每页多少条数据
    let size = Number(req.query.size) || 5

    //集合中总共有多少条数据
    let total = await User.countDocuments({ "username": new RegExp(req.query.username, "gi") })

    // console.log(total);
    let startpage = (page - 1) * size

    // 总页数
    let totalPage = Math.ceil(total / size)


    const result = await User.find({ "username": new RegExp(req.query.username, "gi") }).limit(size).skip(startpage)
        // console.log(result);



    res.render("./admin/users/searchuser", {
        userlists: result,
        total: total,
        page: page,
        size: size,
        totalPage: totalPage,
        username: req.query.username
    })

}