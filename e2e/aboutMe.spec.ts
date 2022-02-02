import { test, expect } from '@playwright/test'

const baseUrl = !process.env.CI ? '' : "/my-portfolio"

test('should navigate to the aboutMe page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=About Me')
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL(baseUrl + '/aboutMe')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h1')).toContainText('About Chi')
})