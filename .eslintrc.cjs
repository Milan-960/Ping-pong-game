module.exports = {
  env: { browser: true, es2015: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/display-name": "off", // Disable display name rule
    "react/prop-types": "off", // Disable prop-types rule
    "no-unused-vars": ["error", { varsIgnorePattern: "^React$" }], // Allow unused React import
  },
};
