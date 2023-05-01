/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "hsl(0, 0%, 20%)",
      pureWhite: "hsl(0, 0%, 100%)",
      secondary: "hsl(180, 96%, 33%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontSize: {
      nav: [
        "15px",
        {
          lineHeight: "28px",
          fontWeight: "400",
          letterSpacing: "0.5px",
        },
      ],
      h1: [
        "20px",
        {
          lineHeight: "18px",
          fontWeight: "400",
          letterSpacing: "2.43px",
        },
      ],
      h2: [
        "16px",
        {
          lineHeight: "18px",
          fontWeight: "400",
          letterSpacing: "2.43px",
        },
      ],
      h3: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
          letterSpacing: "2.43px",
        },
      ],
      dev: [
        "18px",
        {
          lineHeight: "18px",
          fontWeight: "700",
          letterSpacing: "2.43px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
