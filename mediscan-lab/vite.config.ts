import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: command === 'serve' ? '/' : '/wp-content/themes/mediscan-react-theme/dist/',
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
