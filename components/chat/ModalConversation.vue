<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(["update:modelValue"])

// Utilisation de computed pour créer un getter et un setter pour isOpen
const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit("update:modelValue", value)
  },
})

const state = reactive({
  title: "",
  description: "",
  userIds: [] as string[],
})

function handleSubmit(event: Event) {
  event.preventDefault()
  // props.onSubmit(state)
  isOpen.value = false
}
</script>

<template>
  <UModal v-model="isOpen">
    <UCard class="w-full">
      <template #header>Créer une conversation</template>

      <UForm
        :state="state"
        class="space-y-4 md:space-y-6"
        @submit="handleSubmit"
      >
        <UFormGroup label="Title" name="title">
          <UInput v-model="state.title" placeholder="Title" required />
        </UFormGroup>
        <UFormGroup label="Description" name="description">
          <UInput v-model="state.description" placeholder="Description" />
        </UFormGroup>
        <UFormGroup label="Utilisateurs" name="userIds">
          <USelectMenu
            v-model="state.userIds"
            placeholder="Utilisateurs"
            multiple
          />
        </UFormGroup>
        <UButton type="submit" block>Créer</UButton>
      </UForm>
    </UCard>
  </UModal>
</template>
