<template>
    <div>
        <div>Welcome!</div>
        <div>Email: {{ auth.user.email }}</div>
        <div>Uid: {{ auth.user.uid }}</div>
        {{todos.listTodos}}
    </div>
</template>

<script setup lang="ts">

import {useAuthStore} from '@/stores/useAuth';
import {useTodosStore} from '@/stores/todosStore';


definePageMeta({
  middleware: ['auth'],
})
  const auth = useAuthStore();
  const todos = useTodosStore();
  // const dataTodown = async () => await todos.getTodos();

</script>