// const http = require("http");

// const server = http.createServer((req,res) => {
//         console.log(req.url);
//     res.end("Done !!");


// });

// server.listen(3000, () => {
   
//     console.log("Server is running... ")
// });

// const http = require("http");

// const server = http.createServer((req,res) => {

//     if(req.url === "/"){
//         res.end("Welcome to Home Page");
//     }
//     else if(req.url === "/about"){
//         res.end("Welcome to About Page");
//     }
//     else if(req.url === "/contact"){
//         res.end("Welcome to Contact Page");
//     }
//     else{
//         res.statusCode = 404;
//         res.end("Page Not Found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server Running... ");
// });

// const http = require("http");

// const server = http.createServer((req,res) => {
//     console.log(req.method);
//     res.end("Request Received");
//     console.log(body);
// });
// server.listen(3000);


const http = require("http");

const server = http.createServer((req,res) => {

    if (req.method === "POST" && req.url === "/register") {
         let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {

        console.log("Raw Body :", body);
        const user = JSON.parse(body);
        console.log(user);
        console.log(user.name);
        console.log(user.age);
        res.end("Data Received");
    });
} else {
    res.end("Other Request");
}
});
server.listen(3000);

/*
Client
↓
POST Request
↓
Chunk 1
        ↓
     data Event
↓
Chunk 2
        ↓
     data Event
↓
Chunk 3
        ↓
     data Event
↓
No More Data
        ↓
      end Event
↓
JSON.parse(body)
↓
Response 

*/



const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("greet", () => {
    console.log("Hello Pranshu");
});
emitter.emit("greet");

emitter.on("welcome", () => {
    console.log("Welcome1");
});
emitter.on("welcome", () => {
    console.log("Welcome2");
});
emitter.on("welcome", () => {
    console.log("welcome3");
});
emitter.emit("welcome");

//  events = {
//    welcome: [
//       callback1,
//       callback2,
//       callback3
//    ]
// }


/* EventEmitter
      ▲
      │
IncomingMessage (req)
      ▲
      │
     req
req.on("data", (chunk) => {
    body += chunk;
});
req ke paas event emitter ki sari powers hai 
{
   "name":"Pranshu",
   "age":19
}
   ye ek baar me nahi aata network se chunks me aata hai eg chunk1 name only then 2 me pranshu like this 
   thats why har chunk ke liye chalta hia 
   multiple time bhi chal sakta hai 
*/

/* end event 
req.on("end", () => {
    console.log(body);
    });
ye sirf ek hi baar execute hota hai 
*/

