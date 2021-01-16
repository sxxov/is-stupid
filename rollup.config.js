import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import childProcess from 'child_process';
import babel from '@rollup/plugin-babel';
import analyze from 'rollup-plugin-analyzer';
import typescript from '@rollup/plugin-typescript';
import jsfuck from 'rollup-plugin-jsfuck';

const production = !process.env.ROLLUP_WATCH;
const watch = {
	clearScreen: false,
};

export default {
	input: 'src/index.ts',
	output: {
		// jsfuck doesn't fuck with sourcemaps
		sourcemap: false,
		format: 'es',
		name: 'is-stupid',
		dir: 'dist',
	},
	watch,
	plugins: [
		resolve({
			browser: true,
		}),

		typescript({
			outDir: 'dist',
			sourceMap: false,
		}),

		commonjs({
			include: [
				'./node_modules/',
			],
		}),

		production && babel({
			extensions: [
				'.js',
				'.mjs',
			],
			include: ['src/**'],
			babelHelpers: 'bundled',
		}),

		production && terser(),

		production && jsfuck(),

		analyze({
			summaryOnly: true,
			limit: 10,
		}),
	],
};

function serve(
	npmScript = [
		'serve',
		'--',
		'--dev',
	],
) {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;

			server = childProcess.spawn('npm', ['run', ...npmScript], {
				stdio: [
					'ignore',
					'inherit',
					'inherit',
				],
				shell: true,
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		},
	};
}
