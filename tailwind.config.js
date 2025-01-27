/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand_blue: "#2a92bb",
        brand_blue_alt: "#62b4d6",
        brand_gray: "#7a7a78",
        brand_gray_alt: "#cdd1d2"
      },
      height: {
        '112': '28rem', // 112 x 0.25rem = 28rem
        '128': '32rem', // 128 x 0.25rem = 32rem
      },
    },
  },
  plugins: [],
}

