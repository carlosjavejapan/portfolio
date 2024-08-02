import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#F13024",
        darkBG: "#131424",
        'light-gray': '#E0E0E0',
        'medium-gray': '#B3B3B3',
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        "explotion": "url(/images/bg-explosion.png)",
        "site": "url(/images/bg-site.svg)",
      },
      background: {
        "gradient-to": "inset-0 bg-gradient-to-l from-[#333333] via-[#333333] to-[#131424]",
        "newBG": "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
