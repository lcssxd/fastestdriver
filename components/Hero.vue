<template>
  <section class="bg-white text-brand_gray">
    <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full">
        <video
          autoplay
          loop
          muted
          playsinline
          class="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl border-4 border-brand_blue shadow"
        >
          <source src="/paris-light-trail.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 class="text-5xl font-bold leading-none sm:text-6xl">
          Valorização
          <span class="text-brand_blue">e Suporte</span>
        </h1>
        <p class="mt-6 mb-8 text-lg sm:mb-12">
          Chegou para transformar a vida dos motoristas de aplicativos. Com pontos de apoio exclusivos em cada cidade, garantimos conforto, segurança e suporte no dia a dia dos profissionais.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
