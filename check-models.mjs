import "dotenv/config";

const API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  if (!API_KEY) {
    console.log("❌ ERROR: GEMINI_API_KEY is missing in .env");
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log("\nRAW RESPONSE:\n", data, "\n");

  if (!data.models) {
    console.log("❌ No models returned. Error:", data.error || data);
    return;
  }

  console.log("Available Gemini Models:\n");
  for (const m of data.models) {
    console.log("-", m.name);
  }
}

listModels();
