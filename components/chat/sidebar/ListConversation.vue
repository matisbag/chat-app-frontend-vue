<script lang="ts" setup>
import type { Conversation } from "~/types/chat"
const route = useRoute()
const { selectConversation } = useConversation()

const props = defineProps<{
  conversations?: Conversation[] | null
}>()

onMounted(async () => {
  if (props.conversations?.find((item) => item.id === route.params.id)) {
    selectConversation(
      props.conversations.find((item) => item.id === route.params.id),
    )
  } else if (route.params.id) {
    await navigateTo("/c")
  }
})
</script>

<template>
  <div class="overflow-y-auto">
    <UDivider />
    <template v-if="conversations?.length">
      <div v-for="item in conversations" :key="item.id" class="group">
        <NuxtLink
          :to="'/c/' + item.id"
          class="hover:bg-gray-100 rounded flex flex-row items-center py-4 px-2 space-x-4"
          exact-active-class="bg-gray-200 hover:bg-gray-200"
          @click="selectConversation(item)"
        >
          <UAvatar
            size="md"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
          />
          <div class="grow min-w-0">
            <div class="text-lg font-semibold truncate">
              {{ item.title }}
            </div>
            <div class="text-gray-500 truncate">
              {{ item.lastMessage?.content }}
            </div>
          </div>
        </NuxtLink>
        <UDivider />
      </div>
    </template>
    <div v-else class="p-4 text-center text-gray-500">No Conversations.</div>
  </div>
</template>
