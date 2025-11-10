import Groq from "groq-sdk";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const apiKey = runtimeConfig.groqApiKey
  const bodyEvent = await readBody(event);
  
  if (!apiKey) {
    return new Error("No API Key for groq found");
  }
  
  const groqClient = new Groq({ apiKey: apiKey });
  
  return groqClient.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "openai/gpt-oss-20b",
  });
})
