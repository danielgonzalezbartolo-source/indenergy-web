/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        indenergy: {
          'navy': '#15323B',      // Azul Marino Profundo - fondos, header, hero, footer
          'turquoise': '#00C887', // Turquesa Medio - marca, iconos, acentos
          'green': '#00A249',     // Verde Vibrante - acentos secundarios
          'lime': '#B0C53F',      // Verde Lima - CTA principal, indicadores
          'slate-100': '#F4F7F7', // Gris claro - fondos de sección
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}