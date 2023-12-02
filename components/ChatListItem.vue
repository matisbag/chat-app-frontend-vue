<template>
  <NuxtLink
    :to="'/c/' + item.id"
    class="flex flex-row py-4 px-2 items-center border-b-2"
  >
    <div class="w-1/4">
      <img
        src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
        class="object-cover h-12 w-12 rounded-full"
        alt=""
      />
    </div>
    <div class="w-full pl-4">
      <div class="text-lg font-semibold">{{ item.name }}</div>
      <span class="text-gray-500">{{ item.lastMessage }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { Chat } from "@/types/chat"

defineProps<{
  item: Chat
}>()
</script>
