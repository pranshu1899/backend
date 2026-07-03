const express = require("express");
const app = express();

/*
app.get("/", (req, res, next) => {
    console.log("Route 1");
    next();
});
iski wajah se next get run hoga normal case me first get run hota h 
*/

app.get("/", (req,res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.path);
    res.send("Hello Pranshu !!!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Page");
});

app.get("/test", (req, res) => {
    console.log(req.method);  //GET
    console.log(req.url);     // /test?name=Pranshu&college=mits
    console.log(req.path);    // /test
    console.log(req.query);   //{name:.., college:..}
    res.send("Done");
});


// --------------dynamic routes-------------------
app.get("/user/:username", (req,res) => {
    console.log(req.params);
    console.log(req.params.username);
    res.send(`Welcome ${req.params.username}`);
    res.send("Dynamic routes magic");
});
app.get("/product/:id", (req,res) => {
    console.log(req.params);
    res.send("Done");
});
// --------------multiple parameters-----------
app.get("/user/:username/post/:postId", (req, res) => {
    console.log(req.params);
    res.send("Done");
});
// localhost:3000/user/pranshu/post/56
/*{
   username: "pranshu",
   postId: "56"
}*/

app.listen(3000, () => {
    console.log("Server Running... ");
});
console.log(typeof app);