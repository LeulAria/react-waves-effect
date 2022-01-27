// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()]
// })

import path from "path";
import {defineConfig} from "vite";
// import tsconfigPaths from "vite-tsconfig-paths";
// import eslintPlugin from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import {viteCommonjs, esbuildCommonjs} from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // This creates part of the magic.
    viteCommonjs(),

    // https://www.npmjs.com/package/@vitejs/plugin-react
    react({
      // exclude: /\.stories\.(t|j)sx?$/,

      babel: {
        // presets: ['@babel/preset-env'],
        // babelrc: true,
        parserOpts: {
          plugins: [
            "optionalChaining",
            "nullishCoalescingOperator",
            "logicalAssignment",
          ],
        },
      },
    }),
  ],

  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        esbuildCommonjs(["tiny-slider", "tiny-slider-react"]),
      ],
    },
  },
});
