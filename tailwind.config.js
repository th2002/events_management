import { nextui } from "@nextui-org/theme";
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
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
            thirdground: "#171A1FFF",
            foreground: "#F8F9FAD6",
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
            foreground: "#FFFFFF",
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
});
