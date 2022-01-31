module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    colors: {
      darkBlue: "#1c1c4c",
      purple: "#50344a",
      grayPurple: "#f8f1f8",
      lightPurple: "#ccaed0",
    },
    fontFamily: {
      sans: ["nobel", "sans-serif"],
      serif: ["adobe-garamond-pro", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
