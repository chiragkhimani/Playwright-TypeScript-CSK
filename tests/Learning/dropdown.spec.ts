import {test, expect} from '@playwright/test'

test.describe('Dropdown', () => {

    test('Verify user can select an option from the dropdown', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/dropdown');

        // await page.locator('#dropdown').selectOption('2'); // Value
        // await page.locator('#dropdown').selectOption({label: 'Option 2'}); // Label
        // await page.locator('#dropdown').selectOption({index: 2}); // Index
        // await page.waitForTimeout(5000);        

        // // Radio button selection
        // await page.locator('input[type="radio"]').check();  

        // // Checkbox selection
        // await page.locator('input[type="checkbox"]').check();
        // await page.locator('input[type="checkbox"]').uncheck();

        // await page.keyboard.press('Control+A'); // Select all text
        // await page.keyboard.press('Enter');
        // await page.keyboard.press('Tab');

        // // Scroll down the page
        // await page.mouse.wheel(0, 1000);

        // await page.locator('input[type="checkbox"]').dragTo(page.locator('input[type="radio"]'));

        // // File Upload
        // await page.locator('input[type="checkbox"]').setInputFiles('tests/test.txt');

        // // Screenshot 
        // await page.screenshot({path: 'screenshot/screenshot2.png', fullPage: true});

        // // Assertions
        // await expect(page.locator('#dropdown')).toHaveValue('2');
        // await expect(page.locator('#dropdown')).toHaveText('Option 2');
        // await expect(page.locator('#dropdown')).toBeVisible();
        // await expect(page.locator('#dropdown')).toBeEnabled();
        // await expect(page.locator('#dropdown')).toBeChecked();
        // await expect(page.locator('#dropdown')).toBeDisabled();
        // await expect(page.locator('#dropdown')).toBeEditable();
        // await expect(page.locator('#dropdown')).toBeEmpty();
        // await expect(page.locator('#dropdown')).toBeFocused();
        // await expect(page.locator('#dropdown')).toBeHidden();

    }) 
});