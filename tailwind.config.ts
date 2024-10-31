import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, #007BFF, #0D4F83)",
      },
      boxShadow: {
        "custom-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "azul-escuro": "#0D4F83",
      },
      screens: {
        "xs": "320px",
      },
      plugins: [],
    },
  },
}
export default config
