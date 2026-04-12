import { test, expect } from '@playwright/test';


test('Open Coffee-cart app', async ({ page }) => {
   await page.goto("https://coffee-cart.app");

  // Menu link is visible
    await page.getByRole('link', { name: 'Menu page' }).isVisible;

});

test('Add To Cart', async ({ page }) => {
    await page.goto("https://coffee-cart.app");

  // Fill in invalid username and password
await page.getByRole('link', { name: 'Menu page' }).click();
await page.getByRole('listitem').filter({ hasText: 'cart (0)' }).click();
await page.locator('[data-test="Espresso"]').click();

  // Expects page to flash an error
        await expect(page.locator("//div[@class='flash error']")).toContainText("Your password is invalid!");


});

test('Correct Login', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/login");

  // Fill in invalid username and password
        await page.locator("//input[@id='username']").fill("tomsmith");
        await page.locator("//input[@id='password']").fill("SuperSecretPassword!");

        await page.locator("//button").click();

  // Expects page to flash an error
        await expect(page.locator("//div[@class='flash success']")).toBeVisible;


});
