// Import zone
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

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
app.post("/", async (req, res) => {
    console.log(req.body);
    const { prompt } = req.body
    //========
    // For text-only input, use the gemini-pro model
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_SECRET_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    //const prompt = "Write a story about a magic backpack."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    //console.log(text);
    //========

    res.send({
        error: false,
        message: "POST successful",
        gemini_response: text
    })
})
// ------------------------------

// Port Listening
app.listen(PORT, () => console.log(`SERVER is UP and RUNNING at port ${PORT}\nLocal Address: http://localhost:${PORT}`))