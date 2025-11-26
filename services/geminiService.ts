import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: In a real production app, ensure this key is safe. 
// For this demo, we assume it's in process.env or the user will rely on static images if missing.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateClinicImage = async (): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing for Gemini.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Nano Banana model alias
      contents: {
        parts: [
          {
            text: 'A hyper-realistic, bright, and modern dental clinic interior. The design features a professional dental chair, advanced equipment, clean white surfaces with green accents (matching hex code #02B53D). Welcoming waiting room or treatment room with large windows, natural light, and plants. High resolution, architectural photography style, 8k.'
          }
        ]
      }
    });

    // Check for inline data (image) in the response parts
    if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                const base64Data = part.inlineData.data;
                return `data:image/png;base64,${base64Data}`;
            }
        }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    return null;
  }
};