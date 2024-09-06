import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
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
    },
    screens: {
      tablet: { max: '768px' },
      mobilelg: { max: '650px' },
      tabletlg: { max: '992px' },
      desktop: { max: '1415px' },
      lgDesktopMin: { min: '1570px' },
      mobile: { max: '575px' },
      // For min width
      minTabletlg: { min: '1200px' },
      maxTabletlg: { min: '1200px' },
    },
  },
  plugins: [],
};
export default config;
