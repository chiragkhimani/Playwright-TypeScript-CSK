import { test, expect } from '@playwright/test';

test.describe('Alert Tests', () => {
    test('should display an alert when button is clicked', async ({ page }) => {
        await page.goto('https://seleniumbootcamp.in/test'); // Replace with your actual URL

        expect(await page.locator('#username')).toBeVisible();

        // Login to the website
        await page.locator('#username').fill("test.chirag");
        await page.locator('#password').fill("Test@123");
        await page.getByText('Login').click();

        await page.locator('//a[@data-testid="test-page-link"]').click();

        const frame = await page.frameLocator('//iframe[@data-testid="test-iframe"]');
        await frame.locator('//button[@data-testid="iframe-button"]').click();
        expect(await frame.locator('//p[@data-testid="iframe-result"]')).toHaveText('iframe-clicked');
        await page.waitForTimeout(5000);
    });
});