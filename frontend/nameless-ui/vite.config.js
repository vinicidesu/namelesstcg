import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      // Redireciona requisições de /api (ou qualquer outro prefixo que você escolher)
      // para o seu backend. Você pode usar '/api' como um prefixo comum.
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Remove o /api do path final
      }
    }
  }
})
