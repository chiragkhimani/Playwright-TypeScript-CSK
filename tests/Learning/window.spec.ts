import { test, expect } from '@playwright/test';



test.describe('Multiple Window Tests', () => {
    test('should handle multiple windows', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/windows');

        const pagePromise =  page.waitForEvent('popup');
        await page.getByText('Click Here').click();
        const newPage =  await pagePromise;

        // const [newPage] = await Promise.all([
        //     page.waitForEvent('popup'),
        //     page.getByText('Click Here').click()
        // ]);
        newPage.bringToFront();
        console.log(await newPage.title());
        await page.waitForTimeout(5000);
        await newPage.close();

        console.log(await page.title());
    });
});