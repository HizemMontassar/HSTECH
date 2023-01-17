<template>
  <div class="flex flex-col md:flex-row items-center my-8 shadow-xl">
    <img :src="props.cours.url" alt="" class="object-cover h-full
    w-full sm:w-3/4 lg:w-1/2" />
    <div class="flex-col md:flex-row px-4">
      <h1 class="font-bold mb-4 text-center">{{ props.cours.name }} Course</h1>
      <p class="font-sans font-semibold">
        {{ props.cours.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ cours: any }>();
</script>
