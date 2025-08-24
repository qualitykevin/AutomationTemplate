// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 3600000,
  use: {
    headless: false,
  },
  reporter: 'line', 
  outputDir: '',
});