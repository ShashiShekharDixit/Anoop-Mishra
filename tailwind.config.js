/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iron: "#14181D",
        panel: "#1B2129",
        panel2: "#20272F",
        mullion: "#3A4653",
        brass: "#B98B4E",
        "brass-light": "#D4AB74",
        pane: "#7FA8C9",
        "pane-light": "#A7C6DF",
        chalk: "#EDEFF2",
        fog: "#8B94A0",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      backgroundImage: {
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.04) 100%)",
      },
    },
  },
  plugins: [],
};
