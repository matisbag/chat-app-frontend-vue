<script lang="ts" setup>
import type { Message } from "~/types/chat"

defineProps<{ messages: Message[] }>()
</script>

<template>
  <div
    class="grow overflow-y-scroll flex flex-col-reverse p-4 space-y-4 space-y-reverse"
  >
    <template v-if="messages.length">
      <ChatContentMessage
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </template>
    <div v-else class="p-4 text-center text-gray-500">No Messages.</div>
  </div>
</template>
