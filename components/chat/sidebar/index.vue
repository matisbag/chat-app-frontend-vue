<script lang="ts" setup>
import type { Chat } from "@/types/chat"

const chats: Chat[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hello",
  },
  {
    id: 2,
    name: "Jane Doe",
    lastMessage: "Hi",
  },
  {
    id: 3,
    name: "John Smith",
    lastMessage: "Hey",
  },
  {
    id: 4,
    name: "Jane Smith",
    lastMessage: "Hi",
  },
]
</script>

<template>
  <div class="flex flex-col space-y-4 py-4 bg-gray-50 w-80">
    <div class="flex flex-col space-y-3 px-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Chats</h1>
        <UButton
          color="primary"
          size="xs"
          :ui="{ rounded: 'rounded-full' }"
          icon="i-heroicons-plus"
        />
      </div>
      <ChatSidebarFilters />
    </div>
    <div>
      <ChatSidebarListChat v-for="chat in chats" :key="chat.id" :item="chat" />
    </div>
  </div>
</template>
