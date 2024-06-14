<template>
  <section class="flex flex-col w-full">
    <ChatContentHeader />
    <div class="grow">ceci est le content : {{ route.params.id }}</div>
    <ChatContentInputBar />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
  middleware: "auth",
})
const route = useRoute()
</script>
