<template>
  <HeroSection title="Contato" desc="Entre em contato sempre que precisar" img="/contact.png">
    <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x px-4 py-6 sm:px-0 sm:py-28">
      <div class="py-6 md:py-0 md:pr-6">
        <h1 class="text-4xl font-bold">Fale conosco</h1>
        <p class="pt-2 pb-4">Para sugestões, dúvidas, orientações e reclamações, acesse nossos canais de atendimento ao cliente.</p>
        <div class="space-y-4">
          <a rel="noopener noreferrer" href="https://maps.app.goo.gl/S5L1erhn3QnCAfYk7" target="_blank" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            <span>R. Francisco Sá - Interlagos II, Sete Lagoas - MG, 35701-344</span>
          </a>
          <a href="tel:5531987763671" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>(31) 9 8776-3671</span>
          </a>
          <a href="mailto:contato@fastestdriver.com.br" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>contato@fastestdriver.com.br</span>
          </a>
        </div>
      </div>
      <form @submit.prevent="sendEmail" novalidate class="flex flex-col py-6 space-y-6 md:py-0 md:pl-6">
        <label class="block">
          <span class="mb-1">Nome completo</span>
          <input type="text" v-model="name" class="block w-full rounded-md shadow-sm outline-none bg-white text-black p-2">
        </label>
        <label class="block">
          <span class="mb-1">Email</span>
          <input type="email" v-model="email" class="block w-full rounded-md shadow-sm outline-none bg-white text-black p-2">
        </label>
        <label class="block">
          <span class="mb-1">Mensagem</span>
          <textarea rows="3" v-model="message" class="block w-full rounded-md outline-none bg-white text-black p-2"></textarea>
        </label>
        <div class="g-recaptcha" data-sitekey="6LcHUsUqAAAAABZNOf7otV73yiXqVj8lTgd0TjUZ"></div>
        <button type="submit" class="px-8 py-3 text-lg rounded bg-white text-brand_blue uppercase font-semibold">Enviar Mensagem</button>
      </form>
    </div>
  </HeroSection>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';

export default {
  components: { HeroSection },
  head: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js',
        async: true,
        defer: true
      }
    ]
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async sendEmail() {
      try {
        // Obter o token do reCAPTCHA
        const recaptchaToken = grecaptcha.getResponse();

        if (!recaptchaToken) {
          alert('Por favor, resolva o reCAPTCHA.');
          return;
        }

        // Enviar os dados e o token para o backend
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
            recaptchaToken
          })
        });

        const data = await response.json();
        if (response.ok) {
          alert('E-mail enviado com sucesso!');
          this.name = '';
          this.email = '';
          this.message = '';
        } else {
          alert(`Erro: ${data.message}`);
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao enviar o e-mail.');
      }
    }
  }
}
</script>

<style>

</style>
