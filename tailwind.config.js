import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./animation.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "var(--container-padding)",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: ["Montserrat", ...defaultTheme.fontFamily.sans],
      fontSize: {
        "10xl": ["var(--10xl)", "90%"],
        "11xl": ["var(--11xl)", "50%"],
        "12xl": ["var(--12xl)", "90%"],
        "13xl": ["var(--13xl)", "90%"],
      },
      colors: {
        "primary": "var(--primary)",
        "accent": "var(--accent)",
        "white-soft": "var(--white-soft)",
        "white-light": "var(--white-light)",
        "white": "var(--white)",
      },
      spacing: {
        "container-padding": "var(--container-padding)",
        "top-head-container-max-width": "var(--top-head-container-max-width)",
        "section-round": "var(--section-round)",
      },
      borderRadius: {
        "section-round": "var(--section-round)",
      }
    }
  },
  plugins: [],
}

