<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const props = defineProps<{
  type: "login" | "signup"
}>()

const { login, signup } = useAuth()
const toast = useToast()
const state = reactive({
  email: undefined,
  pseudo: undefined,
  password: undefined,
})
const pending = ref(false)
const loginPage = computed(() => props.type === "login")

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Must be at least 4 characters"),
})

const signupSchema = z.object({
  email: z.string().email(),
  pseudo: z.string().min(4, "Must be at least 4 characters"),
  password: z.string().min(4, "Must be at least 4 characters"),
})

const schema = computed(() => (loginPage.value ? loginSchema : signupSchema))

type LoginSchema = z.infer<typeof loginSchema>
type SignupSchema = z.infer<typeof signupSchema>

async function onSubmit(event: FormSubmitEvent<LoginSchema | SignupSchema>) {
  pending.value = true
  if (loginPage.value) {
    const { email, password } = event.data as LoginSchema
    await login(email, password)
  } else {
    const { email, pseudo, password } = event.data as SignupSchema
    await signup(email, pseudo, password).then(() => {
      toast.add({
        color: "green",
        title: "Account created",
        description: "You can now log in",
      })
    })
  }
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

        <UFormGroup v-if="!loginPage" label="Pseudo" name="pseudo">
          <UInput v-model="state.pseudo" placeholder="Your pseudo" />
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
