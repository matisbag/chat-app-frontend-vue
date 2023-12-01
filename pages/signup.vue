<script lang="ts" setup>
definePageMeta({
  middleware: "guest-only",
});
</script>

<template>
  <AuthForm type="signup" />
</template>
