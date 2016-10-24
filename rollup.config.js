import { rollup } from 'rollup'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  dest: 'docs/bundle.js',
  format: 'iife',
  moduleName: 'words',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs(),
    buble()
  ]
};
