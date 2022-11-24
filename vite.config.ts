import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
  });
};
