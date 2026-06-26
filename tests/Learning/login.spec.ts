import {test} from '@playwright/test'

test.describe('Login Validation', () => {

    test('Verify user can login with valid credentials', async ({page})=>{
        await page.goto('https://seleniumbootcamp.in');

        await page.locator('#username').fill("test.demo");
        await page.locator('#password').fill("Test@123");
        await page.getByText("Login").click();
    })

})