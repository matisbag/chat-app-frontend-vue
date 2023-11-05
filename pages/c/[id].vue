<template>
  <div>{{ route.params.id }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "chat",
});
const route = useRoute();
</script>
