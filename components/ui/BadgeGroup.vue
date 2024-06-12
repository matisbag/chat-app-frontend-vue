<template>
  <div class="flex space-x-2">
    <UBadge
      v-for="item in items"
      :key="item"
      :color="selected === item.value ? 'primary' : 'white'"
      class="cursor-pointer"
      @click="selectBadge(item.value)"
    >
      {{ item.label }}
    </UBadge>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps<{
  items: { label: string; value: string }[]
  modelValue: string
}>()

const emit = defineEmits(["update:modelValue"])

const selectBadge = (value: string) => {
  emit("update:modelValue", value)
}

const selected = computed(() => props.modelValue)
</script>
