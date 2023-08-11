import { World } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';

export interface IEcommerceSite extends World {
  context?: BrowserContext;
  page?: Page;
}
