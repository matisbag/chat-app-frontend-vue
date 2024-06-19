import type { UserWithoutPassword } from "./user"

export interface Message {
  id?: number
  content: string
  userId: number
  user: UserWithoutPassword
  createdAt: Date
}

export interface Conversation {
  id: string
  title: string
  description: string
  lastMessage?: Message
  users: UserWithoutPassword[]
}
