/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "@/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        euljiro: ["BMHANNAProOTF", "sans-serif"],
        "spoqa-thin": ["Spoqa Han Sans Neo Thin", "sans-serif"],
        "spoqa-light": ["Spoqa Han Sans Neo Light", "sans-serif"],
        "spoqa-regular": ["Spoqa Han Sans Neo Regular", "sans-serif"],
        "spoqa-medium": ["Spoqa Han Sans Neo Medium", "sans-serif"],
        "spoqa-bold": ["Spoqa Han Sans Neo Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
