/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1d267d",
        second: "#CDE7F1",
        third: "#1B0E38",
        dark: "#0F172A",
        complementary: "#08829D",
        white: "#FDF7FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "4xl": [
          "2.55rem",
          {
            lineHeight: "35.78px",
          },
        ],
      },
    },
  },
  plugins: [],
};
