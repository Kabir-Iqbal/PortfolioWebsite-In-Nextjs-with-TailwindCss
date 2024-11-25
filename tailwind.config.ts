import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "glass-color" : "rgba(27, 27, 85, 0.175);",
         navColor: "rgb(27, 27, 85);",
         bodycolor: "rgb(0,0,33);",
         footercolor: "rgb(3, 14, 32);",
   },
    },
  },
  plugins: [],
};
export default config;
