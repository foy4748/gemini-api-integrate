const dotEnv = require("dotenv");
dotEnv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY);

async function geminiService(prompt) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    //const prompt = "How to become a pro developer ?"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

// geminiService();

module.exports = geminiService;