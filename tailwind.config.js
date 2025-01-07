/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "soft-red": "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",

        // Neutral
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "serif"],
      },
    },
  },
  plugins: [],
};
