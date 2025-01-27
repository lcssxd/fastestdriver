<template>
  <div class="relative h-screen overflow-hidden">
    <Transition name="page">
      <div id="scroll" class="flex flex-col h-full overflow-y-auto">
        <Header />
        <Nuxt class="mb-auto" />
        <Footer />
      </div>
    </Transition>
    <MenuMobile />
    <WhatsAppButton />
  </div>
</template>

<script>
import Header from '~/components/section/Header.vue';
import Footer from '~/components/section/Footer.vue';
import MenuMobile from '~/components/section/MenuMobile.vue';
import WhatsAppButton from '~/components/WhatsAppButton.vue';

export default {
  components: {
    Header,
    Footer,
    MenuMobile,
    WhatsAppButton
  },
  watch: {
    '$route.path'() {
      this.scrollToTop();
    }
  },
  methods: {
    scrollToTop() {
      const scrollElement = document.getElementById('scroll');
      if (scrollElement) {
        scrollElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
