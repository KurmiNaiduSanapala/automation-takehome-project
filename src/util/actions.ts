import { Page } from '@playwright/test';

export async function clickElement(page: Page, locator: string): Promise<void> {
  const element = await page.locator(locator);
  if (element) {
    await element.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  } else {
    throw new Error(`Element with locator '${locator}' not found.`);
  }
}

export async function enterText(page: Page, locator: string, text: string): Promise<void> {
  const element = await page.locator(locator);
  if (element) {
    await element.fill(text);
  } else {
    throw new Error(`Element with locator '${locator}' not found.`);
  }
}
