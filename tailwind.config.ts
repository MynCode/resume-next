import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        moveDash: {
          from: { strokeDashoffset: "10" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
        moveDash: "moveDash 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
