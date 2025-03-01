/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C", // Charcoal Black (Main Background)
        secondary: "#F5F5F5", // Soft White (Cards, Sections)
        accent: "#C2C2C2", // Muted Silver (Borders, Lines)
        highlight: "#FFD700", // Gold (CTA Buttons, Highlights)
        text: "#FFFFFF", // Pure White (Text)
      },
      fontFamily: {
        FontClash: ['Clash Grotesk', 'sans-serif']       
      },
    },
  },
  plugins: [],
};
