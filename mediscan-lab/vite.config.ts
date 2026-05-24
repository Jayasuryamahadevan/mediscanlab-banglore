import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const wpThemeBuild =
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
        .process?.env?.WP_THEME_BUILD === 'true';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react()],
    // Use root assets for Vercel/static deploys.
    // Use WP theme path only when explicitly requested for WordPress packaging.
    base:
        command === 'serve'
            ? '/'
            : wpThemeBuild
                ? '/wp-content/themes/mediscan-react-theme/dist/'
                : '/',
    server: {
        host: true,
        allowedHosts: true
    },
    build: {
        cssCodeSplit: true,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    animation: ['framer-motion', 'gsap'],
                    icons: ['lucide-react']
                }
            }
        }
    }
}));
