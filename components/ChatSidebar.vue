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
  <div class="flex flex-col p-3 bg-gray-100 w-64">
    <UInput placeholder="Search..." class="mb-2" />
    <div>
      <ChatListItem v-for="chat in chats" :key="chat.id" :item="chat" />
    </div>
  </div>
</template>
