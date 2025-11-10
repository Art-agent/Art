import { createStorage } from 'unstorage';
import indexedDbDriver from 'unstorage/drivers/indexedb';
import { type ChatMessage } from '~~/shared/types/chatMessage';

const storage = createStorage({
  driver: indexedDbDriver({ base: "artappchat:" }),
});

const CHAT_KEY = 'artappchat_history'

export default function() {
  
  const getChatHistory = async (agentId: String): Promise<ChatMessage[]|[]> => {
    const chatHistory = await storage.getItem<ChatMessage[]>(`${CHAT_KEY}:${agentId}`) || [];
    return chatHistory
  }
  
  const addChatMessage = async (agentId: String, message: ChatMessage): Promise<void> => {
    const messages = await getChatHistory(agentId);
    messages.push(message);
    await storage.setItem(`${CHAT_KEY}:${agentId}`, messages);
  }
  
  const clearChatHistory = async(): Promise<void> => {
    await storage.removeItem(CHAT_KEY)
  }
  
  const setChatHistory = async (messages: ChatMessage[]): Promise<void> => {
    await storage.setItem(CHAT_KEY, messages);
  }
  
  return {
    addChatMessage, getChatHistory,
    setChatHistory, clearChatHistory
  }
}