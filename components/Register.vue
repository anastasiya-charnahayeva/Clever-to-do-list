<template>
<div>
  <div class="w-full max-w-lg m-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-32">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Email" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required>
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>

      <button class="btn btn-blue" @click="authStore.createUser(email, password, name)">Зарегистрироваться</button>
      <NuxtLink to="/login" class="underline text-blue-500 text-center"><p>If you have an account, You can login here</p></NuxtLink>
    </div> 
  </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~~/stores/authStore'

const authStore = useAuthStore()
const { credentials } = storeToRefs(useAuthStore())

const username = ref('')
const email = ref('')
const password = ref('')
console.log('1', credentials.value)
</script>

<style>
.btn-blue {
  @apply bg-blue-700 text-white text-center w-full m-0;
}
</style>