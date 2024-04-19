// Import zone
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const geminiService = require("./geminiService");

// Gemini Related Package import
const { GoogleGenerativeAI } = require("@google/generative-ai");

// ===============================

// Call dotenv to access env variables
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

// Middlewares
app.use(cors());            // For resolving CORS issues
app.use(express.json());    // For parsing POST body as JS object

// API Endpoints
app.get("/", (req, res) => {
    res.send({
        error: false,
        message: "SERVER is UP and RUNNING"
    })
})

// Interacting with Gemini API
app.post("/gemini-ai", async (req, res) => {
    //console.log(req.body);
    const { prompt } = req.body

    const gemini_response = await geminiService(prompt);

    res.send({
        error: false,
        message: "POST successful",
        gemini_response
    })
})
// ------------------------------

// Port Listening
app.listen(PORT, () => {
    console.log(`
    SERVER is UP and RUNNING at port - ${PORT}
    Local Address: http://localhost:${PORT}
    `
    )
})