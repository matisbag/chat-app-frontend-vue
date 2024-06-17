<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
  <div class="flex flex-col space-y-3 px-4">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chats</h1>
      <UButton
        color="primary"
        size="xs"
        :ui="{ rounded: 'rounded-full' }"
        icon="i-heroicons-plus"
        @click="isOpen = true"
      />
      <ChatModalConversation v-model="isOpen" />
    </div>
    <ChatSidebarFilters />
  </div>
</template>
