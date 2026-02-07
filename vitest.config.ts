import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import tsconfigPaths from 'vite-tsconfig-paths';

const isHeadless = process.env.BROWSER_VIEWIER !== 'true';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    css: true,
    browser: {
      enabled: true,
      provider: playwright(),
      headless: isHeadless,
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
    setupFiles: ['./lib/vitest/setup.ts'],
  },
});
