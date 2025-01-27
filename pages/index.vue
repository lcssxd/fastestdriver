<template>
  <div>
    <Hero />
    <WhyChooseBanner />
    <CallToAction />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import CallToAction from '~/components/CallToAction.vue';
import WhyChooseBanner from '~/components/WhyChooseBanner.vue';

export default {
  name: 'IndexPage',
  components: {
    Hero,
    CallToAction,
    WhyChooseBanner
  }
}
</script>
