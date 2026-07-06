const express = require("express");
const app = express();

app.use(express.json());
//middleware created by express

const checkLogin = (req, res, next) => {
    console.log("Checking Login");
    next();
}

app.post("/register", (req, res) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.age);
    res.send("User Registered");
});

app.get("/profile", checkLogin, (req, res) => {
    res.send("Welcome to Profile");
});

app.listen(3000);