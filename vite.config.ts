import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({

	plugins: [react(), tailwindcss()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					gsap: ["gsap"],
					lenis: ["@studio-freight/lenis"],
					tsparticles: [
						"@tsparticles/engine",
						"@tsparticles/react",
						"@tsparticles/slim",
					],
					"lamina": ["lamina"],
					"lucide-react": ["lucide-react"],
					"react-icons": ["react-icons"],
					"react-three-fiber": ["@react-three/fiber"],
					"three": ["three"],
					"framer-motion": ["framer-motion"],
					"react-three-drei": ["@react-three/drei"],
				},
			},
		},
	},
});
