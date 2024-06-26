import { nextui } from "@nextui-org/theme";
import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-hightlight": 'url("/backgrounds/banner_pink.png")',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            thirdground: "#171A1FFF",
            foreground: "#F8F9FAD6",
            primary: "#F26298",
            content_primary: "#171A1FFF",
            content_secondary: "#323842FF",
            content_thrid: "#6E7787FF",
            focus: "#F26298",
          },
        },
      },
    }),
  ],
});
