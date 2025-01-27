<template>
  <section class="py-6 bg-brand_blue_alt text-gray-900">
    <div class="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
      <div class="flex items-center justify-center lg:text-left">
        <img src="/cell.png" alt="Celular com o aplicativo" class="w-48 h-auto">
      </div>
      <div class="flex flex-col items-center justify-center space-y-4 p-2">
        <div>
          <p class="mb-1 text-2xl font-medium tracking-widest uppercase text-white">Descubra um novo jeito de viajar com segurança e praticidade.</p>
          <h1 class="py-2 text-4xl font-medium leading-tight">Seja passageiro ou motorista, conectamos você ao que importa.</h1>
        </div>
        <div class="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
          <template v-if="!userType">
            <button class="px-5 py-3 text-lg font-semibold rounded-lg bg-white text-brand_blue" @click="userType = 'motorista'">Motorista</button>
            <button class="px-5 py-3 text-lg font-semibold rounded-lg bg-white text-brand_blue" @click="userType = 'passageiro'">Passageiro</button>
          </template>
          <template v-else>
            <button class="inline-flex items-center px-5 py-3 rounded-lg bg-white text-brand_blue_alt" @click="goToLink('google')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-7 h-7 text-brand_blue_alt">
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs">GET IT ON</span>
                <span class="font-semibold">Google Play</span>
              </span>
            </button>
            <button class="inline-flex items-center px-5 py-3 rounded-lg bg-white text-brand_blue_alt" @click="goToLink('apple')">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="fill-current w-7 h-7 text-brand_blue_alt">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span class="flex flex-col items-start ml-4 leading-none">
                <span class="mb-1 text-xs">Download on the</span>
                <span class="font-semibold">App Store</span>
              </span>
            </button>
            <button @click="userType = ''">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="flex-shrink-0 size-6 text-white">
                <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
              </svg>
            </button>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userType: ""
    }
  },
  methods: {
    goToLink(store) {
      const links = {
        motorista: {
          google: "https://play.google.com/store/apps/details?id=br.com.fastestdriver.taxi.drivermachine",
          apple: ""
        },
        passageiro: {
          google: "https://play.google.com/store/apps/details?id=br.com.fastestdriver.passenger.drivermachine",
          apple: ""
        }
      };
      window.open(links[this.userType][store], "_blank", "noopener,noreferrer");
    }
  }
}
</script>

<style>

</style>
