export interface Message {
  id?: number
  content: string
  createdAt: Date
}

export interface Conversation {
  id: string
  title: string
  lastMessage: Message
}
