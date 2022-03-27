module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      darkBlue: "#1c1c4c",
      darkerBlue: "#141B4D",
      lightPurple: "#ccaed0",
      purple: "#50344a",
      darkPurple: "#5D3754",
      grayPurple: "#f8f1f8",
      plum: "#8E3A80",
      lavender: "#E7D3E6",
      green: "#67823A",
      sage: "#D0DEBB",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["nobel", "sans-serif"],
      serif: ["adobe-garamond-pro", "serif"],
    },
    extend: {
      maxWidth: {
        "dt-content": "960px",
      },
    },
  },
  plugins: [],
};
