export interface ChatMessage {
  agentId: String
  role: 'user' | 'art'
  content: String
  timestamp: number
}