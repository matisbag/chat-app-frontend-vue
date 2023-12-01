<template>
  <div>{{ route.params.id }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
  middleware: "auth",
})
const route = useRoute()
</script>
