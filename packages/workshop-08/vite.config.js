import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  resolve: {
		alias: {
			$common: path.resolve('../common'),
      $w6: path.resolve('../workshop-06/__solution__'),
		}
	},
  server: {
		port: 3000
	}
};

export default config;
