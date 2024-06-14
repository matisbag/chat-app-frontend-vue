export interface Message {
  id?: number
  content: string
  userId: number
  createdAt: Date
}

export interface Conversation {
  id: string
  title: string
  lastMessage: Message
}
