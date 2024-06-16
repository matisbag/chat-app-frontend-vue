<script setup lang="ts">
import type { Conversation } from "~/types/chat"

defineProps<{
  conversations: Conversation[] | null
}>()
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
    <ChatSidebarListConversation :conversations="conversations" />
  </div>
</template>
