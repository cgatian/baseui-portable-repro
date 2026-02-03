import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve workspace package to source so no build is required and HMR works
      '@baseui-portable-repro/ui': path.resolve(
        __dirname,
        '../../packages/ui/src/index.ts',
      ),
      '@baseui-portable-repro/ui/Button': path.resolve(
        __dirname,
        '../../packages/ui/src/Button/index.ts',
      ),
    },
  },
});
