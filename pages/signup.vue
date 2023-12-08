<script lang="ts" setup>
definePageMeta({
  middleware: "guest-only",
})

useHead({
  titleTemplate: "%s - Sign up",
})
</script>

<template>
  <AuthForm type="signup" />
</template>
