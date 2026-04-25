import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        moss: "#28463a",
        leaf: "#6f8f72",
        coral: "#d9745f",
        dawn: "#f4c27b",
        mist: "#eef4ef"
      }
    }
  },
  plugins: []
};

export default config;
