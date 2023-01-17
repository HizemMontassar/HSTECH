<template>
  <div class="flex p-16">
    <div class="w-full">
      <CoursesCourseCard
        v-for="cours in coursesList"
        :key="cours.id"
        :cours="cours"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { courses } from "~~/data/courses";

interface Course {
  id: number;
  name: string;
  description: string;
  url: string;
}

let coursesList = ref(courses);
</script>
