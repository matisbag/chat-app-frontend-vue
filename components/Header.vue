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
        <UDropdown
          v-if="isAuth"
          :items="dropdownItems"
          :popper="{ placement: 'bottom' }"
        >
          <span class="font-medium text-gray-900">
            {{ user?.email }}
          </span>
        </UDropdown>
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
const { isAuth, user, logout } = useAuth()

const dropdownItems = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-left-on-rectangle-20-solid",
      click: () => {
        logout()
      },
    },
  ],
]
</script>
