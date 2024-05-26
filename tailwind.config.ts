/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sora: "Sora, serif",
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1128px",
    },
    extend: {
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
