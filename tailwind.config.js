/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 1s linear 1",
        elevate: "elevate 1s linear 1",
        blitz: "blitz 3s linear infinite",
      },
      backgroundImage: {
        "shop-image": "url('../src/assets/shop-image.webp')",
        image1: "url('../src/assets/image1.png')",
      },
      colors: {
        sang: "rgba(193, 122, 107, 0.5)",
        "transparent-white": "rgba(255, 255, 255, 0.3)",
        "transparent-red": "rgba(194, 40, 60, 0.5)",
        "transparent-black": "rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        "3xl": "5px 12px 14px 0px #000000;",
      },
      fontFamily: {
        "message-font": ["message-font", "sans-serif"],
        "button-font": ["button-font"],
        "text-font": ["text-font"],
      },
      keyframes: {
        shake: {
          "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%,80%, 90%, 100%": {
            transform: "translateX(+5px)",
          },
          "8%, 16%, 24%, 32%, 41%, 48%, 56%, 64%, 72%, 81%, 88%": {
            transform: "translateX(1px)",
          },
          "5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%": {
            transform: "translateX(-5px)",
          },
          "96%": {
            transform: "translateX(1px)",
          },
          "97%": {
            transform: "translateX(1px)",
          },
          "98%": {
            transform: "translateX(1px)",
          },
          "99%": {
            transform: "translateX(1px)",
          },
        },
        elevate: {
          "0%": {
            transform: "translateY(4px)",
          },
          "25%": {
            transform: "translateY(-2px)",
          },
          "50%": {
            transform: "translateY(2px)",
          },
          "75%": {
            transform: "translateY(-2px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        blitz: {
          "0%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "25%": {
            textShadow: "none",
          },
          "40%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "45%": {
            textShadow: "none",
          },
          "46%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "47%": {
            textShadow: "none",
          },
          "48%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "48,2%": {
            textShadow: "none",
          },
          "48,5%": {
            textShadow: "0px 0px 12px #CE5937",
          },

          "49%": {
            textShadow: "none",
          },
          "50%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "55%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "60%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "65%": {
            textShadow: "none",
          },
          "75%": {
            textShadow: "none",
          },
          "80%": {
            textShadow: "0px 0px 12px #CE5937",
          },
          "100%": {
            textShadow: "0px 0px 12px #CE5937",
          },
        },
      },
    },
  },
  plugins: [],
};
