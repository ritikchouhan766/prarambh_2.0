import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0D7B7A",
          light: "#83D0CD",
          pale: "#ECF9F8",
          dark: "#0A5F5D",
        },
        blue: {
          DEFAULT: "#1E4F75",
          light: "#7FAED1",
          pale: "#EEF5FA",
        },
        navy: {
          DEFAULT: "#1F3E4E",
          light: "#6A8595",
          pale: "#F1F6F8",
        },
        coral: {
          DEFAULT: "#F2A8B7",
          light: "#F7D5DD",
          pale: "#FFF2F5",
        },
        gold: {
          DEFAULT: "#F1D27A",
          light: "#F8E7A8",
          pale: "#FFF9E8",
        },
        sage: {
          DEFAULT: "#A6C9A6",
          light: "#DCEED7",
          pale: "#F2F9F1",
        },
        sand: {
          DEFAULT: "#F8F4EE",
          light: "#FCF9F5",
        },
        slate: "#2F4958",
        body: "#4E6474",
        muted: "#718096",
        border: "#E4EEF1",
        off: "#F9FBFB",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        "card-lg": "20px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)",
        DEFAULT: "0 4px 16px rgba(0,0,0,.08)",
        lg: "0 12px 40px rgba(0,0,0,.12)",
        teal: "0 6px 20px rgba(14,124,123,.3)",
      },
    },
  },
  plugins: [],
};

export default config;
