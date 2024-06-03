<template>
  <div class="container space-y-8">

    <SectionHeadingComponent>
      <template #title>
        OUR SERVICES
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
    title: 'DIGITAL EXPERIENCE DESIGN',
    content: 'We deliver cutting-edge, and custom-crafted digital experiences tailored to engage your audience'
  },
  {
    icon: '/icons/2.svg',
    title: 'ACCELERATED APP DEVELOPMENT',
    content: 'Rapid development of applications without compromising quality, helping you focus on what matters most'
  },
  {
    icon: '/icons/3.svg',
    title: 'ARTIFICIAL INTELLIGENCE',
    content: 'We offer AI and machine learning solutions, from predictive analytics to decision-making tools, tailored to drive operational efficiency'
  },
  {
    icon: '/icons/4.svg',
    title: 'NATIVE APP DEVELOPMENT',
    content: 'Superior native Android and iOS apps, designed to fully utilize the platform\'s capabilities and offerings'
  },
  {
    icon: '/icons/5.svg',
    title: 'SYSTEMS INTEGRATION',
    content: 'Streamlined integrations of disparate systems to improve data flow and functionality, enhancing your decision-making capabilities'
  },
  {
    icon: '/icons/6.svg',
    title: 'UNIFIED SYSTEMS',
    content: 'Systems unification to align operations and streamline efficiency, creating a unified view of your organisation'
  },
  {
    icon: '/icons/7.svg',
    title: 'ENTERPRISE SYSTEM MERGING',
    content: 'Combining multiple systems into one streamlined, efficient framework that supports your business’s growth and decision making abilities'
  },
  {
    icon: '/icons/8.svg',
    title: 'CLOUD COMPUTING',
    content: 'Transition to comprehensive cloud services. Enjoy scalability, flexibility, and cost-efficiency, with security as a priority'
  }
];
</script>

<style scoped>

</style>