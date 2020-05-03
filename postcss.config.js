module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    ["postcss-preset-env", { stage: 1 }],
    ...(process.env.NODE_ENV === "production" ? [] : []),
  ],
}
