<template>
<div class="flex bg-gray-200 text-xl">
    <div class="flex-1">
        <NuxtLink to="/" class="hover:text-white"> Home </NuxtLink>
    </div>
    <div class="flex-1">
        <NuxtLink to="/todos" class="hover:text-white"> All tasks </NuxtLink>
    </div>
    <div class="flex-1">
        <NuxtLink to="/todos/today" class="hover:text-white"> Today's tasks </NuxtLink>
    </div>
    <div class="flex-1">
        <NuxtLink to="/todos/calendar" class="hover:text-white"> Calendar </NuxtLink>
    </div>
    <div class="flex-1">
        <button class="btn hover:text-white">
            Logout
        </button>
    </div>
</div>
</template>
<script setup lang="ts">
import {useCookie} from "#app";
const router = useRouter();
const logout = () => {
  const token = useCookie('token');
  token.value = null
  router.push('/')
}
</script>

<style>
  .flex {
    @apply bg-gray-200;
  }
  .flex-1 {
    @apply text-gray-800 text-center bg-gray-300 px-4 py-2;
  }
  .flex-1:last-child {
    @apply bg-transparent m-0 p-0;
  }
</style>