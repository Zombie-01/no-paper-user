/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        gradient:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%, linear-gradient(153deg, #370617 0.42%, #370617 0.43%, #6A040F 51.34%, #9D0208 101.22%))"
      },
      screens: {
        sm: "330px",
        md: "768px"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
