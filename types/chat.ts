import type { User } from "./user"

export interface Message {
  id?: number
  content: string
  userId: number
  user: User
  createdAt: Date
}

export interface Conversation {
  id: string
  title: string
  lastMessage: Message
}
