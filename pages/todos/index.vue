<template>
    <div>
        <TodoList :today="false"/>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
    middleware: ['auth'],
    })
</script>
