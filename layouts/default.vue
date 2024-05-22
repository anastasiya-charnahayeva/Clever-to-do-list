<template>
  <div>
    <Header/>
    <slot />
  </div>
</template>
<style>
  .btn {
    @apply py-2 px-4;
  }
  .btn-blue {
    @apply bg-blue-700 text-white;
  }
  .btn-blue:hover {
    @apply text-opacity-75 cursor-pointer;
  }
</style>