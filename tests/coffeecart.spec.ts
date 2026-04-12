import { test, expect } from '@playwright/test';


test('Open Coffee-cart app', async ({ page }) => {
   await page.goto("https://coffee-cart.app");

  // Menu link is visible
    await expect(page.getByRole('link', { name: 'Menu page' })).toBeVisible;
await page.close();
});

test('Add To Cart', async ({ page }) => {
   await page.goto("https://coffee-cart.app");

  // Add Espresso to cart
  await page.getByRole('link', { name: 'Menu page' }).click();
  await page.getByRole('listitem').filter({ hasText: 'cart (0)' }).isVisible();
  await page.locator('[data-test="Espresso"]').click();



  // Cart count + 1; Espresso is in cart
  await expect(page.getByRole('listitem').filter({ hasText: 'cart (1)' })).toBeVisible(); 
  await page.getByRole('listitem').filter({ hasText: 'cart (1)' }).click();
  await expect(page.getByText('Espresso$10.00 x 1+-$10.00x')).toBeVisible();
  await page.close();

});

