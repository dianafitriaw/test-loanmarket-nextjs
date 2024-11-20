import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bgcolor': '#FFFFFF',
        'bluee' : '#17A9E2',
        'greytext' : '#646567',
        'bggrey' : '#D9D9D9',
        'purple': '#6150C1',
        'green': '#146C94',
        'greenlight': '#1FFFE1',
        'purpletua': '#4A3764',




      },
    },
  },
  plugins: [],
} satisfies Config;
