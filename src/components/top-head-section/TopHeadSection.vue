<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="top-head">
    <div class="top-head-container container h-full flex flex-col justify-center space-y-20">

      <div class="space-y-3">
        <img class="h-32 w-auto mx-auto" src="/images/brand-name.png" alt="brand-name.png" />
        <p class="font-medium text-lg sm:text-2xl text-center tracking-tight italic">REFINING FIBRE INFRASTRUCTURE</p>
      </div>

      <div class="flex flex-row gap-2 justify-center">
        <Input placeholder="Enter a Location" class="w-full rounded-3xl sm:w-[300px]" />
        <Button class="rounded-3xl">CHECK YOUR COVERAGE</Button>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .top-head {
    height: 100svh;
  }
</style>
<!--    background: rgb(0,212,255);-->
<!--    background: linear-gradient(180deg, rgba(0,212,255,0.2890582258293942) 0%, rgba(0,212,255,0) 100%);-->
