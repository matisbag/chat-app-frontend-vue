import type { Conversation } from "~/types/chat"

export const useConversation = () => {
  const selectedConversation = useState<Conversation | null>()

  const selectConversation = (c: Conversation | undefined) => {
    selectedConversation.value = c || null
  }

  return { selectedConversation, selectConversation }
}
