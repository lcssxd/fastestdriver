<template>
  <div class="flex flex-col h-screen overflow-y-auto">
    <Header />
    <Nuxt class="mb-auto" />
    <Footer />
    <div class="fixed bottom-6 right-10">
      <WhatsAppButton />
    </div>
  </div>
</template>

<script>
import Header from '~/components/section/Header.vue';
import Footer from '~/components/section/Footer.vue';
import WhatsAppButton from '~/components/WhatsAppButton.vue';

export default {
  components: {
    Header,
    Footer,
    WhatsAppButton
  }
}
</script>

<style>

</style>
