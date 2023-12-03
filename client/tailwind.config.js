/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      backgroundImage: {
        'your-image': "url('https://m.media-amazon.com/images/I/81K0jonMwHL._SX3000_.jpg')",
      },
      screens: {
        'sm': '100px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: { // Use 'colors' instead of 'color'
        "dark-blue": "#0C2340",
        'navy-blue': '#0C2340',
        'light-white':'  #F5F5F5',
        'text-ligh':'#666362',
        'customRed': '#555D50',
        'light-blue':'#2C3E50',
        'light-background':'#AEB5B6',

        // You can replace this hex code with your desired navy blue color value

      },
      fontFamily: {
        custom: ['"Bitter"', 'sans'], // Use the font name "Bitter"
      },
     
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'your-image': "url('https://m.media-amazon.com/images/I/81K0jonMwHL._SX3000_.jpg')",
      },
      screens: {
        'sm': '100px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
      colors: { // Use 'colors' instead of 'color'
        "dark-blue": "#0C2340",
        'navy-blue': '#0C2340',
        'light-white':'  #F5F5F5',
        'text-ligh':'#666362',
        'customRed': '#555D50',
        'light-blue':'#2C3E50',
        'light-background':'#AEB5B6',



        // You can replace this hex code with your desired navy blue color value

      },
      fontFamily: {
        custom: ['"Bitter"', 'sans'], // Use the font name "Bitter"
      },
    },
  },
  plugins: [],
});