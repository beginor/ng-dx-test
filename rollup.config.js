import rollup from 'rollup'
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main-aot.js',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  plugins: [
    // css({ output: 'dist/build.css' }),
    alias({
      jszip: './node_modules/jszip/dist/jszip.min.js'
    }),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
    nodeResolve({
      jsnext: true,
      module: true,
      externals: []
    }),
    uglify()
  ]
}
