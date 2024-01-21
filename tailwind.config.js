/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

