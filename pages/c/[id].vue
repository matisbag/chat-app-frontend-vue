<template>
  <section class="grow overflow-hidden flex flex-col">
    <ChatContentHeader />
    <ChatContentListMessage :messages="messages" />
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
const { $api, $socket } = useNuxtApp()
const route = useRoute()

const messages = ref<Message[]>([])

onMounted(() => {
  $socket.emit("joinConversation", route.params.id)

  $socket.on("newMessage", (message) => {
    messages.value.unshift(message)
  })
})

onBeforeUnmount(() => {
  $socket.emit("leaveConversation", route.params.id)
  $socket.off("newMessage")
})

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
