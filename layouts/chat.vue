<script lang="ts" setup>
const { $socket } = useNuxtApp()
const { fetchConversations, conversations } = useConversation()

onMounted(async () => {
  await fetchConversations()

  $socket.on("newConversation", async () => {
    await fetchConversations()
  })

  $socket.on("newMessage", async () => {
    await fetchConversations()
  })
})

onBeforeUnmount(() => {
  $socket.off("newConversation")
  $socket.off("newMessage")
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
