<script setup lang="ts">
import type { Conversation } from "~/types/chat"

defineProps<{
  conversations: Conversation[] | null
}>()
</script>

<template>
  <div class="flex flex-col space-y-4 py-4 bg-gray-50 w-80">
    <ChatSidebarHeader />
    <ChatSidebarListConversation :conversations="conversations" />
  </div>
</template>
