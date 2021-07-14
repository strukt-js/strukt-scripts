import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import nodeResolver from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import svgrRollup from '@svgr/rollup';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const svgr = svgrRollup.default;

export default {
  plugins: [
    nodeResolver({
      extensions: ['.js'],
    }),

    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    peerDepsExternal(),
    commonjs(),
    typescript(),
    svgr(),
    url(),
    postcss({
      minimize: true,
    }),

    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      presets: ['@strukt-js/babel-preset-strukt'],
      plugins: ['@babel/plugin-transform-runtime'],
      exclude: 'node_modules/**',
    }),
  ],

  output: {
    file: 'dist/index.js',
    format: 'module',
    sourcemap: true,
    preferConst: true,
    plugins: [
      getBabelOutputPlugin({
        filename: 'index.js',
        presets: ['@strukt-js/babel-preset-strukt'],
      }),

      terser({ ecma: 2020 }),
    ],
  },
};
