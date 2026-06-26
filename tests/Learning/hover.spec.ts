import {test} from '@playwright/test'

test.describe('Mouse Hover', () => {

    test('Verify user can hover on the element', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/hovers');

        const images = await page.locator("div[class='figure']").all(); // list of images

        for(const img of images){
            await img.hover();
            const text = await img.locator('h5').innerText();
            console.log(text);
        }
    })

})
