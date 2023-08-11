import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 200,
  args: ['--start-maximized'],
  headless: false,
};

export const config = {
  browserOptions,
  BASE_URL: 'https://www.amazon.com',
};
