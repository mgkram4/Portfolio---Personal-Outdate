/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-10": "rgba(0,102,255,255)",
        "blue-60": "rgba(210, 232, 254, 255)",
        "blue-90": "rgba(178, 221, 254, 255)",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        aboutMe: "url('/aboutMe.png')",
        tech: "url('/tech.jpg')",
        contact: "url('/contact.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
