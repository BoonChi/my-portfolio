import { test, expect } from '@playwright/test';

test('should navigate to the aboutMe page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/');
  // Find an element with icon and click on it
  await page.locator('[data-icon="info-circle"]').click();
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/aboutMe');
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('p >> nth=0')).toContainText('Currently I am based in Poland and I DO NOT require a visa sponsorship');
});
