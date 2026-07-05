# 🚀 Backend Development Journey (Node.js → Express → MongoDB)

> Learning backend development from first principles by understanding **how things work internally**, not just using frameworks.

---

## 🎯 Goal

This repository documents my backend development journey.

Instead of jumping directly into Express or MongoDB, I started by learning how Node.js works behind the scenes and then gradually moved towards building scalable backend applications.

The focus is on understanding concepts deeply enough to write code independently and build real-world projects.

---

# 📚 Roadmap

```text
✅ Node.js Fundamentals
        │
        ▼
🟡 Express.js (In Progress)
        │
        ▼
⏳ MongoDB + Mongoose
        │
        ▼
⏳ Authentication (JWT + bcrypt)
        │
        ▼
⏳ REST APIs
        │
        ▼
⏳ Production Backend
        │
        ▼
⏳ Web3 Backend Integration
```

---

# ✅ Topics Completed

## Node.js

- Node.js Runtime
- Modules (CommonJS)
- npm & package.json
- File System (fs)
- Synchronous vs Asynchronous Programming
- Event Loop
- HTTP Module
- Creating HTTP Server
- Routing
- HTTP Methods
- Request Body
- Events
- EventEmitter
- Streams (Basics)
- req.on("data")
- req.on("end")
- JSON Parsing

---

## Express.js (Current)

- Express Introduction
- Why Express Exists
- Installing Express
- Creating First Express Server
- Express Application Object
- app.listen()
- app.get()
- Route Registration
- Route Matching
- GET vs POST Routes
- req & res Objects
- Route Parameters (`req.params`)
- Query Parameters (`req.query`)

---

# 💡 Key Concepts Learned

### Node HTTP vs Express

Node

```js
if(req.method==="GET" && req.url==="/"){
    res.end("Home");
}
```

Express

```js
app.get("/", (req,res)=>{
    res.send("Home");
});
```

Understanding what Express abstracts internally was one of the biggest learning milestones.

---

### Event Driven Architecture

Learned how Node.js uses:

- Events
- EventEmitter
- Streams
- req.on("data")
- req.on("end")

to process incoming requests before Express simplifies everything.

---

### Express Request Lifecycle

```text
Browser

↓

Request

↓

Express

↓

Route Matching

↓

Callback Execution

↓

Response
```

---

# 📂 Repository Structure

```
.
├── NodeJS/
├── Express/
└── README.md
```

(Will expand as the journey progresses.)

---

# 🎯 Learning Philosophy

This repository is not about memorizing syntax.

The goal is to understand:

- Why a feature exists
- How it works internally
- Where it should be used
- How to implement it in real-world projects

Every topic is learned with practical examples before moving to the next one.

---

# 🚀 What's Next?

- Middleware
- express.json()
- Request Body in Express
- REST APIs
- MongoDB
- Mongoose
- Authentication
- Production-ready Backend APIs

---

## 📈 Progress

```text
Node.js        ██████████ 100%

Express.js     ███░░░░░░░ 35%

MongoDB        ░░░░░░░░░░ 0%

Authentication ░░░░░░░░░░ 0%

REST APIs      ░░░░░░░░░░ 0%
```

---

### ⭐ This repository will continue to grow as I progress through backend development and eventually integrate it with blockchain and Web3 applications.