<script lang="ts" setup>
definePageMeta({
  middleware: "guest-only",
})

useHead({
  titleTemplate: "%s - Login",
})
</script>

<template>
  <AuthForm type="login" />
</template>
