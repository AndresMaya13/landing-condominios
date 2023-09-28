module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      padding: {
        default: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#292830",
        secondary: "#5139de",
        secondaryHover: "#5139de",
        primaryHover: "#5139de0f",
        dark: "#292830",
        light: "#BDBDBD",
      }
    },
  },
  plugins: [],
};
