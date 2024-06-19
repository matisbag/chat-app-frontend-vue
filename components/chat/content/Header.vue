<script lang="ts" setup>
const { selectedConversation } = useConversation()
const isModalConversationOpen = ref(false)
</script>

<template>
  <div class="px-4 py-2 flex space-x-4 items-center bg-gray-100">
    <UAvatarGroup size="md" :max="2">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="benjamincanac"
      />
      <UAvatar
        src="https://avatars.githubusercontent.com/u/904724?v=4"
        alt="Atinux"
      />
      <UAvatar
        src="https://avatars.githubusercontent.com/u/7547335?v=4"
        alt="smarroufin"
      />
    </UAvatarGroup>
    <div class="grow min-w-0">
      <div
        class="text-lg font-medium truncate"
        :title="selectedConversation?.title"
      >
        {{ selectedConversation?.title }}
      </div>
      <div class="text-sm text-gray-500 truncate">
        Vous,
        {{ selectedConversation?.users.map((user) => user.pseudo).join(", ") }}
      </div>
    </div>
    <UButton
      color="gray"
      variant="link"
      size="xl"
      icon="i-heroicons-ellipsis-vertical"
      @click="isModalConversationOpen = true"
    />
    <ChatModalConversation
      v-model="isModalConversationOpen"
      :conversation="selectedConversation"
    />
  </div>
</template>
