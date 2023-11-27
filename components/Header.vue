<template>
  <header class="bg-white shadow-sm z-10">
    <nav
      class="container mx-auto flex items-center justify-between p-6 lg:px-8"
    >
      <div class="flex">
        <a href="/" class="-m-1.5 p-1.5">
          <img class="h-8 w-auto" src="/icon.png" alt="" />
        </a>
      </div>
      <div>
        <span v-if="isAuth" class="font-medium text-gray-900">
          {{ user?.email }}
        </span>
        <NuxtLink
          v-else
          to="/login"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { isAuth, user } = useAuth();
</script>
