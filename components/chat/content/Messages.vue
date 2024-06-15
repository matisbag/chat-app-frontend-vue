<script lang="ts" setup>
import type { Message } from "~/types/chat"

defineProps<{ messages: Message[] }>()

const { user } = useAuth()
const { $formatRelativeDate } = useNuxtApp()

const isOwnMessage = (message: Message) => {
  return message.userId === user.value?.id
}
</script>

<template>
  <div
    class="grow overflow-y-scroll flex flex-col-reverse p-4 space-y-4 space-y-reverse"
  >
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
        <p v-if="!isOwnMessage(message)" class="text-sm font-bold">
          {{ message.user.pseudo }}
        </p>
        <p class="text-sm">{{ message.content }}</p>
        <span class="mt-1 text-xs text-gray-500 block text-right">
          {{ $formatRelativeDate(message.createdAt) }}
        </span>
      </div>
    </div>
  </div>
</template>
