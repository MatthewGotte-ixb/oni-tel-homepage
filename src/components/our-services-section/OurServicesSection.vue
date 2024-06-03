<template>
  <div class="container space-y-8">

    <SectionHeadingComponent>
      <template #title>
        What We Offer
      </template>
    </SectionHeadingComponent>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div v-for="item in serviceItems" :key="item.title" class="flex gap-6 lg:gap-10">
        <img class="h-10 w-auto" :src="item.icon" alt=""/>
        <div class="flex flex-col">
          <div class="font-bold tracking-tight text-lg">{{ item.title }}</div>
          <div>{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import SectionHeadingComponent from '@/components/common/SectionHeadingComponent.vue'

const serviceItems = [
  {
    icon: '/icons/1.svg',
    title: 'Unmatched Speed and Reliability',
    content: 'Our fiber-optic network offers lightning-fast internet speeds and unparalleled reliability, ensuring you stay connected without interruptions.'
  },
  {
    icon: '/icons/2.svg',
    title: 'Cutting-Edge Technology',
    content: 'We utilize the latest advancements in fiber-optic technology to deliver superior performance and future-proof solutions for all your connectivity needs.'
  },
  {
    icon: '/icons/3.svg',
    title: 'Exceptional Customer Support',
    content: 'Our dedicated support team is available 24/7 to assist you with any issues or inquiries, providing personalized and efficient service.'
  },
  {
    icon: '/icons/4.svg',
    title: 'Wide Coverage Area',
    content: 'We provide extensive coverage across urban and rural areas, ensuring high-speed internet access wherever you are.'
  },
];
</script>

<style scoped>

</style>