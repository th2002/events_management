import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            primary: {
              DEFAULT: "#F26298",
            },
            content_primary: "#171A1FFF",
            content_secondary: "#323842FF",
            content_thrid: "#6E7787FF",
            focus: "#F26298",
          },
        },
        dark: {
          colors: {
            background: "#000000",
            primary: {
              DEFAULT: "#F26298",
            },
            content_primary: "#FFFFFF",
            focus: "#F26298",
          },
        },
      },
    }),
  ],
};
