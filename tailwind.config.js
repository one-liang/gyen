/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,js}"],
  theme: {
    extend: {
      textColor: {
        primary: "#87BE23",
        "primary-dark": "#6C9C30",
        "primary-lighten": "#E2EFCB",
        "secondary-dark": "#F39313",
        "secondary-light": "#FAB900",
        "error-dark": "#FF0000",
        "error-light": "#FEF0F0",
        "gray-900": "#2A2220",
        "gray-800": "#3F3D3C",
        "gray-600": "#696969",
        "gray-500": "#838383",
        "gray-400": "#999999",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
        "gray-50": "#FCFCFC",
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
      },
      backgroundColor: {
        primary: "#87BE23",
        "primary-dark": "#6C9C30",
        "primary-light": "#E2EFCB",
        "secondary-dark": "#F39313",
        "secondary-light": "#FAB900",
        "error-dark": "#FF0000",
        "error-light": "#FEF0F0",
        "gray-900": "#2A2220",
        "gray-800": "#3F3D3C",
        "gray-600": "#696969",
        "gray-500": "#838383",
        "gray-400": "#999999",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
        "gray-50 ": "#FCFCFC",
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
      },
      borderColor: {
        primary: "#87BE23",
        "primary-dark": "#6C9C30",
        "primary-lighten": "#E2EFCB",
        "secondary-dark": "#F39313",
        "secondary-light": "#FAB900",
        "error-dark": "#FF0000",
        "error-light": "#FEF0F0",
        "gray-900": "#2A2220",
        "gray-800": "#3F3D3C",
        "gray-600": "#696969",
        "gray-500": "#838383",
        "gray-400": "#999999",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
        "gray-50 ": "#FCFCFC",
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
      },
      gradientColorStops: {
        "gradient-left ": "#86BC25",
        "gradient-middle ": "#CAF57B",
        "gradient-right ": "#C9F974",
        "gradient-black-75": "rgba(0, 0, 0, 0.75)",
      },
      ringColor: {
        primary: "#87BE23",
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
