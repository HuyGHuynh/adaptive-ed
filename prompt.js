export const videoSummaryPrompt = `
Summarize the main ideas and key details of the provided video. Then create 3 high-quality multiple-choice quiz questions that test understanding and reasoning based on the content.

Each question should:
• Each question must include a clear question sentence (not just a list of options).
• Each question should have 4 answer choices (A–D).
• Do not mention or reference “the video.”
• Put Answer and Explanation on separate lines.
• Keep all questions self-contained, concise, and factually correct.

Format your response as:
Quiz: 
Question number: ... 
 A. …
 B. …
 C. …
 D. …
Answer: X — [Short explanation]
`;