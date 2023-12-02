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
    <input
      type="text"
      placeholder="Search..."
      class="w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-primary text-sm sm:text-base"
    />
    <div>
      <ChatListItem
        v-for="(chat, index) in chats"
        :key="chat.id"
        :item="chat"
      />
    </div>
  </div>
</template>
