<template>
  <main class="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
    <div
      class="w-full rounded-lg shadow border md:mt-0 sm:max-w-xl xl:p-0 bg-gray-800 border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
        >
          {{ loginPage ? "Login" : "Create account" }}
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              v-model="user.email"
              type="email"
              id="email"
              class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              v-model="user.password"
              type="password"
              id="password"
              placeholder="••••••••"
              class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary hover:bg-primary focus:ring-primary"
          >
            {{ loginPage ? "Log in" : "Create" }}
          </button>
          <p class="text-gray-400">
            Or
            <NuxtLink
              :to="loginPage ? '/signup' : '/login'"
              class="font-medium hover:underline"
            >
              {{ loginPage ? "sign up" : "Login" }}
            </NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: "login" | "signup";
}>();

const user = ref({
  email: "",
  password: "",
});

const loginPage = computed(() => props.type === "login");
</script>
