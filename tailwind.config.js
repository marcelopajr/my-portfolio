/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.webp')",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },
    },
  },
  plugins: [],
};
