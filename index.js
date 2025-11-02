import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { videoSummaryPrompt } from './prompt.js';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
const result = await model.generateContent([
    videoSummaryPrompt,
    {
        fileData: {
            fileUri: "https://youtu.be/kskiEKghjAE?si=wpsH7xNBm-P2Wani",
        },
    },
]);
console.log(result.response.text());
