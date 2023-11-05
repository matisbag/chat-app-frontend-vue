<template>
  <NuxtLayout name="default">
    <div class="flex grow">
      <div class="flex flex-col p-3 bg-gray-100 w-64">
        <input
          type="text"
          placeholder="Search..."
          class="w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-primary text-sm sm:text-base"
        />
        chat list
      </div>
      <slot />
    </div>
  </NuxtLayout>
</template>
