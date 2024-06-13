<template>
  <NuxtLink
    :to="'/c/' + item.id"
    class="hover:bg-gray-100 rounded flex flex-row items-center py-4 px-2"
    exact-active-class="bg-gray-200 hover:bg-gray-200"
  >
    <div class="w-1/4">
      <UAvatar
        size="md"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
    </div>
    <div class="w-full pl-4">
      <div class="text-lg font-semibold">{{ item.name }}</div>
      <span class="text-gray-500">{{ item.lastMessage }}</span>
    </div>
  </NuxtLink>
  <UDivider />
</template>

<script lang="ts" setup>
import type { Chat } from "@/types/chat"

defineProps<{
  item: Chat
}>()
</script>
