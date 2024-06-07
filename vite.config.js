import {defineConfig} from "vite";

export default defineConfig({
	base: "/pwa-features-demo/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				contactPickerApi: resolve(__dirname, "contact-picker-api/index.html"),
				deviceOrientationApi: resolve(__dirname, "device-orientation-api/index.html"),
				screenOrientationApi: resolve(__dirname, "screen-orientation-api/index.html"),
				vibrationApi: resolve(__dirname, "vibration-api/index.html"),
			},
		},
	},
});
