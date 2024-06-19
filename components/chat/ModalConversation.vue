<script setup lang="ts">
import type { Conversation } from "~/types/chat"
import type { UserWithoutPassword } from "~/types/user"

const props = defineProps<{
  conversation?: Conversation | null
}>()

const model = defineModel<boolean>()
const { $api } = useNuxtApp()

const state = reactive<{
  title: string
  description: string
  userIds: number[]
}>({
  title: "",
  description: "",
  userIds: [],
})
const loadingSearch = ref(false)
const loadingSubmit = ref(false)
const isUpdate = computed(() => !!props.conversation)

watchEffect(() => {
  if (props.conversation) {
    state.title = props.conversation.title
    state.description = props.conversation.description
    state.userIds = props.conversation.users.map((u) => u.id)
  }
})
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

  await $api(
    isUpdate.value
      ? `/conversations/${props.conversation?.id}`
      : "/conversations",
    {
      method: isUpdate.value ? "PUT" : "POST",
      body: state,
    },
  )
    .then(() => {
      model.value = false
      state.title = ""
      state.description = ""
      state.userIds = []
    })
    .finally(() => {
      loadingSubmit.value = false
    })
}
</script>

<template>
  <UModal v-model="model">
    <UCard class="w-full">
      <template #header>
        {{ isUpdate ? "Update" : "Create" }} Conversation
      </template>

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
          {{ isUpdate ? "Update" : "Create" }}
        </UButton>
      </template>
    </UCard>
  </UModal>
</template>
