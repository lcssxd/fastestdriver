<template>
	<header class="p-4 bg-brand_blue text-white/80 shadow z-10">
		<div class="container flex justify-between h-14 md:h-20 mx-auto">
			<NuxtLink to="/" aria-label="Back to homepage" class="flex items-center justify-center overflow-hidden size-14 md:size-20 rounded-full bg-white">
        <img src="/logo.jpg" alt="" class="size-10 md:size-14">
      </NuxtLink>
			<ul class="flex items-stretch space-x-3">
				<li v-for="(item, index) in items" :key="index" class="flex">
					<NuxtLink
            :to="{ name: item.id }"
            :aria-label="item.label"
            class="flex items-center px-4 -mb-1 border-b-2 border-transparent transition-all duration-200 hover:text-white"
            exact-active-class="text-white border-white"
          >{{ item.label }}</NuxtLink>
				</li>
			</ul>
			<!-- <button class="flex justify-end p-4 md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button> -->
		</div>
	</header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "about", label: "Sobre" },
        { id: "contact", label: "Contato" }
      ]
    }
  }
}
</script>

<style>

</style>
