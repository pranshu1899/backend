const express = require("express");
const app = express();

/*
app.use((req, res, next) => {
    console.log("Middleware running... ");
    res.send("Access denied");
    next();
});

app.get("/", (req, res) => {
    console.log("Route Running");
    res.send("Lets study middleware");
});

*/

app.use((req, res, next) => {
    const loggedIn = false;
    if(!loggedIn){
        return res.send("Login First");
    }
    next();
} );

app.get("/profile", (req, res) => {
    res.send("Welcome to Profile");
});

app.listen(3000, () => {
    console.log("Server Running... ");
});

/*
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
    console.log("Middleware 1 End");
});

app.get("/", (req, res) => {
    console.log("Route");
    res.send("Home");
});
output : 

Middleware 1
Route
Middleware 1 End

*/