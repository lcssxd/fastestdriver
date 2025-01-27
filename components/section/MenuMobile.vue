<template>
	<header class="fixed bottom-0 left-0 w-full flex md:hidden p-4 bg-brand_blue_alt text-white/50">
    <div class="container flex mx-auto px-6">
      <div class="grid grid-cols-3 justify-items-center gap-4 w-full">
        <NuxtLink
          v-for="(item, index) in items"
          :key="index"
          :to="{ name: item.id }"
          :aria-label="item.label"
          class="flex flex-col space-y-2 items-center px-4 -mb-1 transition-all duration-200 hover:text-white"
          exact-active-class="!text-white"
        >
          <component :is="require(`@/static/icon/${item.id}.svg?inline`)" class="size-6" />
          <span class="text-xs font-bold">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </div>
	</header>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.state.menu
    }
  }
}
</script>

<style>

</style>
