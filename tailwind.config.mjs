/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        radiate: "radiate 2s infinite",
      },
      keyframes: {
        radiate: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.3",
            "box-shadow": "0 0 10px rgba(0, 0, 0, 0.5)",
          },
          "50%": {
            transform: "scale(1.8)",
            opacity: "0.8",
            "box-shadow": "0 0 30px rgba(176, 250, 176, 0.7)",
          },
          "100%": {
            transform: "scale(2.5)",
            opacity: "0",
            "box-shadow": "0 0 50px rgba(0, 255, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
