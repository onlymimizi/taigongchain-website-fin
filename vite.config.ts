import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // 👈 指定根目录为当前路径
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
})
