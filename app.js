const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const session = require("express-session")

const app = new express()

app.set("view engine", "ejs")

app.set("views", __dirname + "/views")

app.use(express.static("public"))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(session({
    secret: "qwertyuiop",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    },
    rolling: true
}))


app.use(bodyParser.json())

app.use((req, res, next) => {
    if (req.url != "/admin/login" && req.url != "/admin/dologin" && !req.session.username) {
        res.redirect("/admin/login")
    } else {
        next()
    }
})

const admin = require("./route/admin")
app.use("/admin", admin)



app.listen(3000, () => {
    console.log("3000running");
})