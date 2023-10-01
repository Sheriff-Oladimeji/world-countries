import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkElem: "hsl(209, 23%, 22%)",
        DarkBg: "hsl(207, 26%, 17%)",
        LightText: "hsl(200, 15%, 8%)",
        LightInput: "hsl(0, 0%, 52%)",
        LightBg: "hsl(0, 0%, 98%)",
        DarkText: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Nun: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
