<template>
  <header :class="`fixed top-0 flex items-center w-full z-10 transition-all duration-300 ease-in-out`"
          :style="{'padding-top': paddingTop + 'px'}"
          class="h-20 bg-white">
    <div class="container px-4 py-4">
      <nav class="flex justify-between items-center">
        <div class="flex-shrink-0">
          <img src="/images/brand-name.png" alt="Logo" class="h-8 w-auto">
        </div>
        <ul class="flex gap-6 items-center">
          <li>
            <a href="/about-us" class="underline-animation font-semibold tracking-tight">ABOUT US</a>
          </li>
          <DarkButton>CONTACT US</DarkButton>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { ref, watchEffect } from 'vue';
import DarkButton from "@/components/common/DarkButton.vue";

const isSticky = ref(false);
const scrollThreshold = 100;
const paddingTop = ref(10);

function updateNavbar() {
  const currentScroll = window.scrollY;
  paddingTop.value = Math.max(0, 10 - currentScroll);
  isSticky.value = currentScroll >= scrollThreshold && paddingTop.value === 0;
}

watchEffect(() => {
  window.addEventListener('scroll', updateNavbar);
  return () => {
    window.removeEventListener('scroll', updateNavbar);
  };
});
</script>

<style scoped>
header {
  transition: padding-top 0.3s ease, background-color 0.5s ease;
}
</style>