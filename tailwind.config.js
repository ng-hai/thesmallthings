module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      white: "#FFFFFF",
      black: "#24292E",
      "dark-gray": "#6A737D",
      "mid-gray": "#E1E4E8",
      "light-gray": "#FAFBFC",
      primary: "#1366E9",
      success: "#6EDC38",
      error: "#ED2626",
      warning: "#F6B951",
      columbia: "#ADD6FF",
    },
    fontFamily: {
      mono: ['"SF Mono"', '"roboto-mono"', "monospace"],
      sans: ["Inter", "sans-serif"],
    },
    letterSpacing: {
      wide: "0.02em",
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      maxWidth: {
        "line-length": "80ch",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "disabled"],
    textColor: ["responsive", "hover", "focus", "group-hover", "disabled"],
    borderColor: ["responsive", "hover", "focus", "disabled"],
    cursor: ["responsive", "hover"],
  },
  plugins: [],
}
