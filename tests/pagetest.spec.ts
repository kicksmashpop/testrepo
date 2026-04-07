import { test, expect } from '@playwright/test';

test('Invalid Username', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/login");

  // Fill in invalid username and password
        await page.locator("//input[@id='username']").fill("omsmith");
        await page.locator("//input[@id='password']").fill("SuperSecretPassword!");

        await page.locator("//button").click();

  // Expects page to flash an error
        await expect(page.locator("//div[@class='flash error']")).toContainText("Your username is invalid!");


});

test('Invalid Password', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/login");

  // Fill in invalid username and password
        await page.locator("//input[@id='username']").fill("tomsmith");
        await page.locator("//input[@id='password']").fill("SuperWrongPassword!");

        await page.locator("//button").click();

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
