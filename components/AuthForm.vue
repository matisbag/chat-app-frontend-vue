<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const props = defineProps<{
  type: "login" | "signup"
}>()

const { login } = useAuth()
const state = reactive({
  email: undefined,
  password: undefined,
})
const pending = ref(false)
const loginPage = computed(() => props.type === "login")

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Must be at least 4 characters"),
})

type Schema = z.output<typeof schema>

// TODO: add signup function
async function onSubmit(event: FormSubmitEvent<Schema>) {
  pending.value = true
  await login(event.data.email, event.data.password)
  pending.value = false
}
</script>

<template>
  <main class="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
    <UCard as="section" class="w-full sm:max-w-xl">
      <template #header>
        <h1>
          {{ loginPage ? "Login" : "Create account" }}
        </h1>
      </template>

      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 md:space-y-6"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="example@gmail.com" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="state.password"
            placeholder="••••••••"
            type="password"
          />
        </UFormGroup>

        <UButton type="submit" :loading="pending" block>
          {{ loginPage ? "Log in" : "Create" }}
        </UButton>

        <p class="text-gray-600">
          Or
          <NuxtLink
            :to="loginPage ? '/signup' : '/login'"
            class="font-medium hover:underline"
          >
            {{ loginPage ? "sign up" : "Login" }}
          </NuxtLink>
        </p>
      </UForm>
    </UCard>
  </main>
</template>
