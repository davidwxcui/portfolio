import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let aiInstance: GoogleGenAI | null = null;

const getAIInstance = (): GoogleGenAI => {
  if (!aiInstance) {
    // API Key must be provided by environment or build process
    if (!process.env.API_KEY) {
      console.warn("API_KEY is missing. Chat functionality will not work.");
    }
    aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiInstance;
};

export const createChatSession = (): Chat => {
  const ai = getAIInstance();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I apologize, but I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
