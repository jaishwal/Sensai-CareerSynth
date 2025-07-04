import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "sensaiii", // Unique app ID
  name: "Sensaiii",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
