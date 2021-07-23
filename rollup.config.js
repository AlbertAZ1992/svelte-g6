import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: production,
    },
    {
      file: pkg.main,
      format: 'umd',
      name,
      globals: {
        svelte: 'svelte',
        'svelte/internal': 'svelteInternal',
      },
      sourcemap: production,
    },
  ],
  external: ['svelte', 'svelte/internal'],
  plugins: [
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),
    typescript({ declaration: true, declarationDir: '' }),
    svelte({
      preprocess: autoPreprocess(),
      // compilerOptions: {css: false},
      emitCss: false
    }),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
