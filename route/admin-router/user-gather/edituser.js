//修改用户信息
const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {
    // console.log(req.query);
    let result = await User.findOne({ "_id": req.query.id })
    res.render("./admin/users/edituser.ejs", {
        editData: result
    })
}