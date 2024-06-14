<script lang="ts" setup>
import type { Message } from "~/types/chat"

defineProps<{ messages: Message[] }>()

const { user } = useAuth()

const isOwnMessage = (message: Message) => {
  return message.userId === user.value?.id
}

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}
</script>

<template>
  <div class="grow overflow-y-scroll flex flex-col h-full p-4 space-y-4">
    <div class="grow"></div>
    <div
      v-for="message in messages"
      :key="message.id"
      class="flex"
      :class="{ 'justify-end ': isOwnMessage(message) }"
    >
      <div
        class="max-w-xs p-2 rounded-lg shadow"
        :class="{
          'bg-primary text-white': isOwnMessage(message),
          'bg-gray-200 text-gray-800': !isOwnMessage(message),
        }"
      >
        <p class="text-sm">{{ message.content }}</p>
        <span class="mt-1 text-xs text-gray-500 block text-right">
          {{ formatTimestamp(message.createdAt.toLocaleString()) }}
        </span>
      </div>
    </div>
  </div>
</template>
