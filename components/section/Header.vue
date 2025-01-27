<template>
	<header class="p-4 bg-brand_blue text-white/80 shadow z-10">
		<div class="container flex justify-center md:justify-between h-14 md:h-20 mx-auto">
			<NuxtLink to="/" aria-label="Back to homepage" class="flex items-center justify-center overflow-hidden size-14 md:size-20 rounded-full bg-white">
        <img src="/logo.jpg" alt="" class="size-10 md:size-14">
      </NuxtLink>
			<ul class="hidden md:flex items-stretch space-x-3">
				<li v-for="(item, index) in items" :key="index" class="flex">
					<NuxtLink
            :to="{ name: item.id }"
            :aria-label="item.label"
            class="flex items-center px-4 -mb-1 border-b-2 border-transparent transition-all duration-200 hover:text-white"
            exact-active-class="text-white border-white"
          >{{ item.label }}</NuxtLink>
				</li>
			</ul>
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
