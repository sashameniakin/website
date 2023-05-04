/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "hsl(0, 0%, 20%)",
      whiteBackground: "hsl(0, 0%, 85%)",
      pureWhite: "hsl(0, 0%, 90%)",
      secondary: "hsl(180, 96%, 33%)",
      black: "hsl(0, 0%, 0%)",
      red: "	hsl(2, 87%, 66%)",
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
      projects: [
        "17px",
        {
          lineHeight: "28px",
          fontWeight: "700",
          letterSpacing: "1px",
        },
      ],
      contact: [
        "28px",
        {
          lineHeight: "18px",
          fontWeight: "700",
          letterSpacing: "2.43px",
        },
      ],
      text: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "500",
          letterSpacing: "1.43px",
        },
      ],
      footer: [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "300",
          letterSpacing: "1px",
        },
      ],
    },
    screens: {
      desktop: "821px",
    },
    extend: {
      content: {
        arrow: 'url("assets/images/arrow.png")',
      },
    },
  },
  plugins: [],
};
