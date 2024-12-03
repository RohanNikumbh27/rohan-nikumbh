module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#E50914', // Netflix Red
        'primary-dark': '#221F1F', // Dark Gray for background or overlays
        'bg-primary': '#000000', // Black background
        'text-primary': '#FFFFFF', // White for primary text
        'text-secondary': '#B3B3B3', // Light Gray for secondary text or icons
        'gradient-dark-start': 'rgba(0, 0, 0, 0.8)', // Gradient start
        'gradient-dark-end': 'rgba(0, 0, 0, 0)', // Gradient end
      },
    },
  },
  plugins: [],
};
