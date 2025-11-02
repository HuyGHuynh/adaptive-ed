import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
const result = await model.generateContent([
    `
Summarize the main ideas and key details of the provided video. Then create 3 high-quality multiple-choice quiz questions that test understanding and reasoning based on the content.

Each question should:
• Be written as a standalone question (do not mention “in the video” or refer to the video directly).
• Have 4 answer options labeled A–D.
• Include the correct answer and a one-sentence explanation.

Format your response as:
Quiz: 
Question
 A. …
 B. …
 C. …
 D. …
Answer: X — [Short explanation]
    `,
    {
        fileData: {
            fileUri: "https://youtu.be/kskiEKghjAE?si=wpsH7xNBm-P2Wani",
        },
    },
]);
console.log(result.response.text());
