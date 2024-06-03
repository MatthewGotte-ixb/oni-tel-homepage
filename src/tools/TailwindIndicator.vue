<template>
  <div v-if="isDevelopment()" class="fixed bottom-5 right-5 z-50">
    <div class="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full text-sm">
      {{ screenSize }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import {isDevelopment} from "@/config/environment.config.ts";

const screenSize = ref('XS');

function updateSize() {
  const width = window.innerWidth;
  if (width < 640) {
    screenSize.value = 'XS';
  } else if (width >= 640 && width < 768) {
    screenSize.value = 'SM';
  } else if (width >= 768 && width < 1024) {
    screenSize.value = 'MD';
  } else if (width >= 1024 && width < 1280) {
    screenSize.value = 'LG';
  } else if (width >= 1280 && width < 1536) {
    screenSize.value = 'XL';
  } else {
    screenSize.value = '2XL';
  }
}

onMounted(() => {
  updateSize();
  window.addEventListener('resize', updateSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSize);
});
</script>

<style scoped>
</style>
