import { test, expect } from '@playwright/test';


test('Open Coffee-cart app', async ({ page }) => {
   await page.goto("https://coffee-cart.app");

  // Menu link is visible
    await expect(page.getByRole('link', { name: 'Menu page' })).toBeVisible;
await page.close();
});

test('Add To Cart', async ({ page }) => {
    await page.goto("https://coffee-cart.app");

  // Fill in invalid username and password
await page.getByRole('link', { name: 'Menu page' }).click();
await page.getByRole('listitem').filter({ hasText: 'cart (0)' }).isVisible();
await page.locator('[data-test="Espresso"]').click();

  // Expects page to flash an error
await expect(page.getByRole('listitem').filter({ hasText: 'cart (1)' })).toBeVisible(); 
await page.close();

});

