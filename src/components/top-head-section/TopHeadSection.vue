<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="top-head">

    <video autoplay muted loop playsinline class="video-background">
      <source src="/images/circ.mp4" type="video/mp4">
    </video>

    <div class="top-head-container container h-full flex flex-col justify-center space-y-28">
      <h1 class="text-center font-light text-lg sm:text-7xl tracking-tight title">REFINING FIBER INFRASTRUCTURE</h1>
      <div class="w-full flex justify-center">
        <div class="flex flex-col gap-2 max-w-[800px] w-1/2">
          <span class="font-medium text-lg sm:text-2xl text-left tracking-tight italic pl-5">Let’s get you connected</span>
          <div class="flex flex-row gap-2">
            <Input placeholder="Enter your address" class="w-full rounded-3xl py-6 px-5 text-xl border-[#D67B13]" />
            <Button class="rounded-3xl h-full bg-[#D67B13] hover:bg-[#D67B13]/80"><MapPin class="size-4 mr-2" />Check Coverage</Button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.top-head {
  position: relative;
  height: 100svh;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  filter: hue-rotate(150deg);
  filter: saturate(1300%);
}

.top-head-container {
  position: relative;
  z-index: 1;
}
</style>

