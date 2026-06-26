import {test} from  '@playwright/test'

// Open website saucedemo and take a screenshot using playwright test runner

test.describe('Screenshot', () => {
    test('Verify user can take a screenshot of the website', async ({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.screenshot({path: 'screenshot/screenshot1.png', fullPage: true});
    })
});