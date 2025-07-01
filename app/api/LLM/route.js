import { NextResponse } from "next/server";
import "dotenv"
import { GoogleGenAI } from "@google/genai";

// const {GoogleGenAI}=require("@google/genai")
require("dotenv").config();

const GEMINI_API_KEY=process.env.GEMINI_API_KEY;
// console.log(GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function POST(request){
    try{
    const {history}=await request.json()
    // console.log(history.length);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      // contents: "Create a tictactoe",
      contents:history,
      // contents:userQuestion,
    config: {
      systemInstruction: `You are a skilled web developer assistant. Based on the user prompt, you must generate three files: index.html, style.css, and script.js. Also provide a short descriptive message about what this project does.

Return your entire response strictly as a valid JSON object with these four keys:
- "index": complete HTML code
- "style": complete CSS code
- "script": complete JavaScript code
- "message": a plain English summary of what the project is

The JSON must follow this structure exactly:

{
  "index": "<complete HTML code>",
  "style": "<complete CSS code>",
  "script": "<complete JS code>",
  "message": "<summary message>"
}

Rules:
- ❌ Do not include any explanations before or after the JSON.
- ❌ Do not wrap the JSON in triple backticks.
- ❌ Do not use markdown formatting.
- ❌ Do not escape quotes or use \\n for new lines inside code blocks.
- ✅ All code must be formatted with real line breaks.
- ✅ Return pure JSON only, nothing else.

Here is an example of correct format:

{
  "index": "<!DOCTYPE html>\n<html>\n<head>\n<title>Calculator</title>\n<link rel='stylesheet' href='style.css'>\n</head>\n<body>...</body>\n</html>",
  "style": "body {\n  background: #fff;\n  font-family: Arial;\n}",
  "script": "document.addEventListener('DOMContentLoaded', function() {\n  // JS code here\n});",
  "message": "I have successfully created a calculator application. It includes:\n- index.html for layout\n- style.css for design\n- script.js for logic."
}

Again, return only the JSON object — not inside quotes, markdown, or anything else.
Any irrelevant questions you will little rudely refuse to ansewr.
`,
    },
  });
  // console.log(response.text);
  const data=response.text;
  // console.log(data);
  return NextResponse.json({
    success:true,
    data,
  })
}catch(error){
  console.log(error);
  return NextResponse.json({
    success:false,
  })
//   res.status(500).json({
//     success:false,
//     message:"Unexpected error occured"
//   })
}
}
// const model=async(
//     // req,res
// )=>{  
  
// }
// model();