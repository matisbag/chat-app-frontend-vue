<script lang="ts" setup>
import type { Conversation } from "@/types/chat"

const { data: conversations } = await useAPI<Conversation[]>("/conversations", {
  method: "GET",
})
</script>

<template>
  <NuxtLayout name="default" class="max-h-screen">
    <div class="flex grow overflow-hidden min-w-[600px]">
      <ChatSidebar :conversations="conversations" />
      <slot />
    </div>
  </NuxtLayout>
</template>
