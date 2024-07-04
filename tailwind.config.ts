/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = withMT({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xs": "275px",
      "2xs": "375px",
      "xs": "430px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1920px"
    },
    fontSize: {
      "xs": "10px",
      "sm": "12px",
      "md": "14px",
      "base": "16px",
      "lg": "28px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "54px",
      "5xl": "76px",
    },
    colors: {
      secondary: "#828282",
      primary: {
        50: "#eefbf3",
        100: "#d5f6e0",
        200: "#afebc6",
        300: "#7bdaa6",
        400: "#44c382",
        500: "#23af6c",
        600: "#148752",
        700: "#106c44",
        800: "#0f5638",
        900: "#0d472e",
        950: "#06281b",
      },
      hue: {
        '50': '#fbf9eb',
        '100': '#f5f0cc',
        '200': '#ece19c',
        '300': '#e1cb63',
        '400': '#d7b438',
        '500': '#c79e2b',
        '600': '#af7f23',
        '700': '#895c1f',
        '800': '#734a20',
        '900': '#623f21',
        '950': '#39200f',
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
});
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
