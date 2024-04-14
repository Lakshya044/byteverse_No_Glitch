// server.js

const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Gemini API Credentials
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_SECRET_KEY = process.env.GEMINI_SECRET_KEY;

// Gemini API Endpoint
const GEMINI_API_URL = "https://api.gemini.com";

// Route to process user messages
app.post("/process-message", async (req, res) => {
  try {
    const { message } = req.body;

    // Make request to Gemini API for natural language understanding
    const response = await axios.post(`${GEMINI_API_URL}/process`, {
      text: message,
      apiKey: GEMINI_API_KEY,
      apiSecret: GEMINI_SECRET_KEY,
    });

    // Extract relevant information from Gemini API response
    const intent = response.data.intent;
    const entities = response.data.entities;

    // Your logic to generate appropriate response based on intent/entities
    let chatResponse = "Sorry, I didn't understand that.";

    // Example: Check if intent is 'greet' and respond accordingly
    if (intent === "greet") {
      chatResponse = "Hello! How can I assist you today?";
    }

    // Send response back to frontend
    res.json({ message: chatResponse });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
