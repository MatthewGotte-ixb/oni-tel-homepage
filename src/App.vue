<script setup lang="ts">
import PageFooter from '@/components/PageFooter.vue';
import NavBarStrip from '@/components/NavBarStrip.vue';
import TailwindIndicator from '@/tools/TailwindIndicator.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <TailwindIndicator />
  <NavBarStrip />
  <RouterView />
  <PageFooter />
</template>

<style scoped>

</style>
