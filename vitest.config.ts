import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import tsconfigPaths from 'vite-tsconfig-paths';

const isHeadless = process.env.BROWSER_VIEWIER !== 'true';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    css: true,
    environment: 'jsdom',
    browser: {
      enabled: !isHeadless,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    setupFiles: ['./lib/vitest/setup.ts'],
  },
});
