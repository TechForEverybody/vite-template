import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), mkcert()],
    envPrefix: 'TFE_',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    preview: {
        port: 3000,
        host: true,
        open: true,
    },
    server: {
        port: 4000,
        open: true,
        host: true,
    },
})
