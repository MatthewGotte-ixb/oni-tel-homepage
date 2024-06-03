<script setup lang="ts">

import SectionHeadingComponent from '@/components/common/SectionHeadingComponent.vue'
</script>

<template>
  <div class="about-us container">
    <SectionHeadingComponent>
      <template #title>
        Why Us
      </template>
    </SectionHeadingComponent>
    <div class="flex flex-row justify-center items-center h-full">
      <div class="w-1/4">
        <img src="/images/logo.png" alt="placeholder" class="w-full h-auto" />
      </div>
      <div class="w-1/3 my-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nobis quisquam quod! Incidunt libero magnam magni numquam provident, recusandae. Accusamus deserunt eaque esse, excepturi facere harum illum laborum repudiandae tenetur.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nobis quisquam quod! Incidunt libero magnam magni numquam provident, recusandae. Accusamus deserunt eaque esse, excepturi facere harum illum laborum repudiandae tenetur.
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  height: 60svh;
}
</style>