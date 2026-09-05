/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        indenergy: {
          'base': '#15323B',        // Azul base - fondos, header, hero, footer
          'turquesa': '#008C09',    // Turquesa vibrante - marca, iconos, acentos
          'vibrante': '#00A249',    // Verde vibrante - acentos secundarios
          'lima': '#B0C53F',        // Verde lima - CTA principal, indicadores
          'slate-100': '#F4F7F7',   // Gris claro - fondos de sección
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
