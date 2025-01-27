<template>
  <div class="bg-contain bg-no-repeat bg-brand_blue_alt h-auto" :style="`background-image: url(${img});`">
    <div class="w-full h-auto md:h-[400px] bg-white/80 text-brand_blue">
      <div class="container mx-auto flex flex-col justify-center p-8 md:p-10 h-full">
        <h1 class="text-4xl font-bold">{{ title }}</h1>
        <p class="text-xl pt-2 pb-4">{{ desc }}</p>
      </div>
    </div>
    <div class="bg-brand_blue_alt text-white">
      <div class="container mx-auto lg:px-10 lg:py-12">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    img: String
  }
}
</script>

<style>

</style>
