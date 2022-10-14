import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$common: path.resolve('../common')
		}
	},
	server: {
		port: 3000,
		watch: {
			ignored: ['**/data/**']
		}
	}
});
