import {test, expect} from '@playwright/test';

test.describe('Alert Tests', () => {
    test('should display an alert when button is clicked', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); // Replace with your actual URL
  
  
        // If we get alret - accept
        // If we get confirm - dismiss
        // If we get prompt - accept with text

        page.on('dialog', async (dialog) => {
            console.log(dialog.message()); // Log the alert message
            
            switch (dialog.type()) {
                case 'alert':
                    await dialog.accept();
                    break;
                case 'confirm':
                    await dialog.dismiss();
                    break;
                case 'prompt':
                    await dialog.accept('Test input'); // Provide input for prompt
                    break;
                default:
                    await dialog.dismiss();
            }
        });
  
        await page.getByText('Click for JS Confirm').click();

        console.log(await page.locator("#result").textContent());
  
    });
});