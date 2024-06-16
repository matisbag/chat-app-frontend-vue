<template>
  <div class="px-4 py-2 flex space-x-4 items-center bg-gray-100">
    <UTextarea
      v-model="messageContent"
      size="md"
      :rows="1"
      :maxrows="7"
      autoresize
      class="grow"
    />
    <UButton
      color="gray"
      variant="link"
      size="xl"
      icon="i-heroicons-paper-airplane"
      :disabled="!messageContent"
      @click="sendMessage"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Conversation, Message } from "~/types/chat"

const props = defineProps<{
  conversationId: Conversation["id"]
}>()

const messageContent = ref<string>("")
const { $api } = useNuxtApp()

async function sendMessage() {
  await $api<Message>(`/conversations/${props.conversationId}/messages`, {
    method: "POST",
    body: { content: messageContent.value },
  })
}
</script>

<style></style>
