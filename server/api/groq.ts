import Groq from "groq-sdk";

export default defineEventHandler(async (event) => {
  console.info("Server was hit")
  const runtimeConfig = useRuntimeConfig(event);
  const apiKey = runtimeConfig.groqApiKey;
  
  setHeader(event, 'content-type', 'text/event-stream')
  setHeader(event, 'cache-control', 'no-cache')
  setHeader(event, 'connection', 'keep-alive')
  
  const body = await readBody(event);
  
  if (!apiKey) {
    return new Error("No API Key for groq found");
  }
  
  const groqClient = new Groq({ apiKey: apiKey });
  var systemPrompt = "";
  
  if (body.agentId !== "general") {
    systemPrompt = `You are art, an AI agent that works for the betterment of the user, right now you are the ${body.agentId}, 
    you will only entertain questions of such type and ignore questions or prompts of other types`;
    const stream = await groqClient.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: `${body.userQuery}`,
        },
      ],
      model: "groq/compound",
      stream: true,
    });
    
    // Pipe the stream directly to client
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ''
      if (content) {
        event.node.res.write(content) // send token immediately
      }
    }
    
    event.node.res.end()
  } else {
    const stream = await groqClient.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${body.userQuery}`,
        },
      ],
      model: "groq/compound",
      stream: true,
    });
    
    // Pipe the stream directly to client
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ''
      if (content) {
        event.node.res.write(content) // send token immediately
      }
    }
    
    event.node.res.end()
  }  
  
})
