/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        integral: ["IntegralCF", "sans-serif"], // IntegralCF shriftni qo'shyapmiz
        satoshi: ["Satoshi", "sans-serif"], // Satoshi shriftni qo'shyapmiz
      },
    },
  },
  plugins: [],
};
