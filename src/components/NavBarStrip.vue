<script setup>
import { computed, ref, watchEffect } from 'vue'
import { Button } from '@/components/ui/button'

const isSticky = ref(false);
const scrollThreshold = 100;
const paddingTop = ref(10);

function updateNavbar() {
  const currentScroll = window.scrollY;
  paddingTop.value = Math.max(0, 10 - currentScroll);
  isSticky.value = currentScroll >= scrollThreshold && paddingTop.value === 0;
}

const navbarBgColor = computed(() => {
  return paddingTop.value === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)';
});

watchEffect(() => {
  window.addEventListener('scroll', updateNavbar);
  return () => {
    window.removeEventListener('scroll', updateNavbar);
  };
});
</script>

<template>
  <header :class="`fixed top-0 flex items-center w-full z-10 transition-all duration-300 ease-in-out`"
          :style="{'background-color': navbarBgColor, 'padding-top': paddingTop + 'px', 'color': 'white'}"
          class="h-20 bg-white">
    <div class="container px-4 py-4">
      <nav class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img src="/images/brand-name.png" alt="Logo" class="h-8 w-auto">
          <div>
            <Button variant="link">
              <router-link to="/">Why Us</router-link>
            </Button>
            <Button variant="link">
              <router-link to="/">What We Do</router-link>
            </Button>
            <Button variant="link">
              <router-link to="/">Talk To Us</router-link>
            </Button>
            <Button variant="link">
              <router-link to="/">Help</router-link>
            </Button>
          </div>

        </div>
        <ul class="flex gap-6 items-center">
          <Button class="rounded-3xl">CONTACT US</Button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  transition: padding-top 0.3s ease, background-color 0.3s ease;
}
</style>