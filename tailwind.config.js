// import resolveConfig from "tailwindcss/resolveConfig";
// import * as colors from "tailwindcss/colors";
// import * as defaultTheme from "tailwindcss/defaultTheme";
// import type {
//   TailwindConfig,
//   TailwindPurgeConfig,
// } from "tailwindcss/tailwind-config";

// import tailwindCss from "tailwindcss";

module.exports = {
  mode: "jit",
  content: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/f07e86c22611272045f9731dfa167476d0776b7d/types/tailwindcss/test/tailwindcss-tests.ts
