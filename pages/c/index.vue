<template>
  <section
    class="w-full flex flex-col space-y-2 justify-center items-center p-4"
  >
    <NuxtImg src="/icon.png" alt="icon" width="50" height="50" />
    <h2 class="text-2xl font-bold ml-4">Welcome to Chat</h2>
    <div>
      Send and receive messages without having to keep your phone connected.
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
  middleware: "auth",
})
</script>
