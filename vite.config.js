import path from "path";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: path.resolve("./src/assets")
		}
	},
	server: {
		fs: {
			allow: ["src/assets"]
		}
	}
};

export default config;
