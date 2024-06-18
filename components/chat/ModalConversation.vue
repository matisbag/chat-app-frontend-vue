<script setup lang="ts">
import type { UserWithoutPassword } from "~/types/user"

const model = defineModel<boolean>()
const { $api } = useNuxtApp()

const state = reactive({
  title: "",
  description: "",
  userIds: [],
})
const loadingSearch = ref(false)
const loadingSubmit = ref(false)

async function search(q: string) {
  loadingSearch.value = true

  const users = await $api<UserWithoutPassword[]>("/users", {
    params: { pseudo: q },
  })

  loadingSearch.value = false

  return users
}

async function handleSubmit() {
  loadingSubmit.value = true

  await $api("/conversations", {
    method: "POST",
    body: state,
  })

  model.value = false
  loadingSubmit.value = false
}
</script>

<template>
  <UModal v-model="model">
    <UCard class="w-full">
      <template #header>Créer une conversation</template>

      <UForm :state="state" class="space-y-4 md:space-y-6">
        <UFormGroup label="Title " name="title">
          <UInput v-model="state.title" placeholder="Title" required />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
          <UInput v-model="state.description" placeholder="Description" />
        </UFormGroup>
        <UFormGroup label="Utilisateurs" name="userIds">
          <USelectMenu
            v-model="state.userIds"
            :loading="loadingSearch"
            :searchable="search"
            placeholder="Search for a user..."
            value-attribute="id"
            option-attribute="pseudo"
            multiple
            trailing
          />
        </UFormGroup>
      </UForm>

      <template #footer>
        <UButton :loading="loadingSubmit" block @click="handleSubmit">
          Créer
        </UButton>
      </template>
    </UCard>
  </UModal>
</template>
