import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "auto",
  },

  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    terser({
      output: { comments: false },
      compress: { drop_console: true },
    }),
  ],
};
