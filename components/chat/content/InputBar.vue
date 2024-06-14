<template>
  <div class="px-4 py-2 flex space-x-4 items-center bg-gray-100">
    <UTextarea
      v-model="value"
      size="md"
      :rows="1"
      :maxrows="7"
      autoresize
      class="grow"
    />
    <UButton
      color="gray"
      variant="link"
      size="xl"
      icon="i-heroicons-paper-airplane"
    />
  </div>
</template>

<script lang="ts" setup>
const value = ref<string>("")
</script>

<style></style>
