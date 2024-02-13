/** @type {import('tailwindcss').Config} */
 export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors : {
        amazonclone : {
          background : "#EAEDED",
          light_blue : "#232F3A",
          background : "#EAEDED",
          deafult : "#131921"
        }
      }
    },
  },
  plugins: [],
}

