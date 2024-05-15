/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,js}"],
  theme: {
    extend: {
      textColor: {
        "gray-500": "#515151",
        "gray-400": "#999999",
        "gray-300": "#D7D7D7",
        "gray-200": "#EEEEEE",
        "gray-100": "#F2F2F2",
        "gray-50": "#FCFCFC",
      },
      backgroundColor: {
        "gray-500": "#515151",
        "gray-400": "#999999",
        "gray-300": "#D7D7D7",
        "gray-200": "#EEEEEE",
        "gray-100": "#F2F2F2",
        "gray-50 ": "#FCFCFC",
      },
      borderColor: {
        "gray-500": "#515151",
        "gray-400": "#999999",
        "gray-300": "#D7D7D7",
        "gray-200": "#EEEEEE",
        "gray-100": "#F2F2F2",
        "gray-50 ": "#FCFCFC",
      },
      fontSize: {
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
      maxWidth: {
        "screen-xl": "1200px",
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
