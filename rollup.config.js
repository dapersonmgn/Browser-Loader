import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import string from 'rollup-plugin-string'
import uglify from 'rollup-plugin-uglify-es'

// Build notes:
// Ignore the warnings about this, and about the unresolved crypto module. It isn't used.

export default {
    input: 'src/index.ts',
    output: {
        file: 'bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: {
            crypto: 'crypto'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        string({ include: '**/*.html' }),
        typescript(),
        uglify()
    ]
}
