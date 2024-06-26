import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'custom-white': 'rgb(231, 233, 234)',
        'custom-grey' : 'rgb(113, 118, 123)',
        'custom-profile-bg' : 'rgb(51, 54, 57)',
        'custom-red' : 'rgb(244, 33, 46)',
        'custom-red-bg' : 'rgb(32, 10, 12)',
        'custom-red-border' : 'rgb(82, 6, 10)',
        'custom-btn-hvr' : 'rgb(215, 219, 220)',
        'custom-hover' : 'rgb(22, 24, 28)',
        'custom-blue' : 'rgb(26, 140, 216)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
export default config;
