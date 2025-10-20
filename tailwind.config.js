/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        p1: 'var(--color-p1)',
        p2: 'var(--color-p2)',
        p3: 'var(--color-p3)',
        p4: 'var(--color-p4)',
        p5: 'var(--color-p5)',
        s1: 'var(--color-s1)',
        s2: 'var(--color-s2)',
        s3: 'var(--color-s3)',
        s4: 'var(--color-s4)',
        s5: 'var(--color-s5)',
      }
    },
  },
  plugins: [],
}
