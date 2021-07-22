import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter : adapter({
			fallback: 'src/app.html',
		}),
    prerender: {
      enabled: false
    },
    ssr: false,
		vite: {
			plugin: [
        resolve(),
        commonjs(),
			],
			ssr: {
        noExternal: []
      },
      optimizeDeps: {
        include: ['@antv/g6', '@antv/algorithm']
      }
		}
	}
};

export default config;