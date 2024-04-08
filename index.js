const dotenv = require("dotenv");
const express = require("express");

// Call dotenv to access env variables
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// API Endpoints
app.get("/", (req, res) => {
    res.send({
        error: false,
        message: "SERVER is UP and RUNNING"
    })
})

// Port Listening
app.listen(PORT, () => console.log(`SERVER is UP and RUNNING at port ${PORT}\nLocal Address: http://localhost:${PORT}`))