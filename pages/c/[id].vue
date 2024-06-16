<template>
  <section class="flex flex-col w-full">
    <ChatContentHeader />
    <ChatContentMessageList :messages="messages" />
    <ChatContentInputBar
      v-if="selectedConversation"
      :conversation-id="selectedConversation.id"
    />
  </section>
</template>

<script lang="ts" setup>
import type { Message } from "~/types/chat"
import { useConversation } from "~/composables/useConversation"

definePageMeta({
  layout: "chat",
  middleware: "auth",
})

const { selectedConversation } = useConversation()
const { $api } = useNuxtApp()

const messages = ref<Message[]>([])

watch(
  () => selectedConversation.value,
  async (newVal) => {
    if (newVal) {
      messages.value = await $api<Message[]>(
        `/conversations/${newVal.id}/messages`,
        {
          method: "GET",
        },
      )
    }
  },
  { immediate: true },
)
</script>
