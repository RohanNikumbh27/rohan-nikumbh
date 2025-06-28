module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // Netflix Red
        "primary-dark": "#221F1F", // Dark Gray for background or overlays
        "bg-primary": "#000000", // Black background
        "text-primary": "#FFFFFF", // White for primary text
        "text-secondary": "#B3B3B3", // Light Gray for secondary text or icons
        "gradient-dark-start": "rgba(0, 0, 0, 0.8)", // Gradient start
        "gradient-dark-end": "rgba(0, 0, 0, 0)", // Gradient end
      },
    },
    screens: {
      xs: "375px", // Mobile (small phones)
      sm: "640px", // Mobile (large phones, small tablets)
      md: "768px", // Tablet (portrait)
      lg: "1024px", // Laptop (small laptops, landscape tablets)
      xl: "1280px", // Laptop/Desktop (standard desktops/laptops)
      "2xl": "1536px", // Large Desktop (large monitors)
      "3xl": "1920px", // Extra Large Desktop (very large monitors)
    },
  },
  plugins: [],
};
