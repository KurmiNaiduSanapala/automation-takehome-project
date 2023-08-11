import { config } from '../util/config';
import { IEcommerceSite } from '../interfaces/ecommerce-site';
import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, ChromiumBrowser } from '@playwright/test';
let browser: ChromiumBrowser;

setDefaultTimeout(60000);

BeforeAll(async function () {
  browser = await chromium.launch(config.browserOptions);
});

Before(async function (this: IEcommerceSite) {
  this.context = await browser.newContext({
    viewport: null,
  });
  this.page = await this.context.newPage();
});

After(async function (this: IEcommerceSite) {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
