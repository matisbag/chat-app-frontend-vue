import type { Conversation } from "~/types/chat"

export const useConversation = () => {
  const { $api } = useNuxtApp()
  const conversations = ref<Conversation[]>([])
  const selectedConversation = useState<Conversation | null>()

  const selectConversation = (c: Conversation | undefined) => {
    selectedConversation.value = c || null
  }

  async function fetchConversations() {
    const response = await $api<Conversation[]>(`/conversations`, {
      method: "GET",
    })
    conversations.value = response
  }

  return {
    selectedConversation,
    conversations,
    selectConversation,
    fetchConversations,
  }
}
