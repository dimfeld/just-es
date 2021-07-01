import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  plugins: [resolve(), commonjs()],
  output: {
    format: 'es',
    dir: 'dist'
  }
}
