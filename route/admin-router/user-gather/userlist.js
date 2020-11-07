//用户列表
const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {;
    // console.log(req);
    // http://localhost:9527/admin/userlist?page=1&size=10  
    let page = Number(req.query.page) || 1

    let size = Number(req.query.size) || 5

    let total = await User.countDocuments({})

    let startpage = (page - 1) * size

    let totalPage = Math.ceil(total / size)

    const result = await User.find({}).limit(size).skip(startpage)
        // console.log(result);
        // console.log(db.User.find())
        // console.log(await User.find({}));

    res.render("./admin/users/userlist.ejs", {
        userlists: result,
        total: total,
        page: page,
        size: size,
        totalPage: totalPage
    })
}