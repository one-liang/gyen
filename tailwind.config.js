/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,js}"],
  theme: {
    extend: {
      colors: {
        amber: {
          900: "#804F4F",
        },
        yellow: {
          900: "#AA580D",
          400: "#FFDD28",
        },
        gray: {
          900: "#212121",
          800: "#3E3E3E",
          700: "#8D8D8D",
          500: "#515151",
          400: "#999999",
          300: "#D7D7D7",
          200: "#EEEEEE",
          100: "#F2F2F2",
          50: "#FCFCFC",
        },
        slate: {
          900: "#211F1D",
          800: "#3B3B3B",
          600: "#464646",
          400: "#9B9B9B",
          200: "#EBEBEB",
          100: "#EEECE7",
          50: "#F7F6F3",
        },
        neutral: {
          200: "#E1E1E1",
          50: "#FAFAFA",
        },
        red: {
          700: "#D71B33",
          600: "#CF0000",
          500: "#FF0000",
          400: "#FF4E4E",
        },
        green: {
          900: "#185304",
          400: "#68BA7A",
        },
        origin: {
          600: "#F25B17",
          500: "#FF5C00",
          400: "#FD8442",
        },
        blue: {
          400: "#5B89FF",
        },
      },
      fontSize: {
        10: [
          "10px",
          {
            lineHeight: "13px",
          },
        ],
        11: [
          "11px",
          {
            lineHeight: "15px",
          },
        ],
        13: [
          "13px",
          {
            lineHeight: "18px",
          },
        ],
        15: [
          "15px",
          {
            lineHeight: "24px",
          },
        ],
      },
      screens: {
        "2xl": "1440px",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      letterSpacing: {
        1: "1px",
      },
      dropShadow: {
        DEFAULT: "0px 0px 8px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        "bounce-x": "bounce-x 1s linear infinite",
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
      boxShadow: {
        DEFAULT: "0px 0px 8px rgba(0, 0, 0, 0.2)",
        card: "0 0 30px 0 rgba(0, 0, 0, 0.5)",
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
