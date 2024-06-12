<template>
  <UInput placeholder="Search..." />
  <UiBadgeGroup v-model="selectedFilterOption" :items="filterOptions" />
</template>

<script lang="ts" setup>
const filterOptions = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Groups", value: "groups" },
]

const selectedFilterOption = ref("all")
</script>
