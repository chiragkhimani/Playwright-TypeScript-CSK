import { test, expect } from '@playwright/test'

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CartPage } from '../../pages/CartPage';
import users from '../../data/invalid_cred.json';

test.describe('Cart Page Validation', () => {

    test('Verify cart page product name @smoke', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';

        const loginPage = new LoginPage(page);
        loginPage.openWebsite();
        loginPage.doLogin(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);

        // Click on add to cart button
        const homePage = new HomePage(page);
        await homePage.addToCart(productName);
        expect(await homePage.getCartCount()).toBe("1");
        await homePage.clickOnCartIcon();

        const cartPage = new CartPage(page);
        expect(await cartPage.cartItemName).toHaveText(productName);
    });

    test('Verify cart icon updated when product is removed @smoke', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';


        
        const loginPage = new LoginPage(page);
        loginPage.openWebsite();

        loginPage.doLogin(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);

        const homePage = new HomePage(page);
        homePage.addToCart(productName);
        expect(await homePage.getCartCount()).toBe("1");
        homePage.logout();

        expect(await loginPage.usernameInput).toBeVisible();
        loginPage.doLogin(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);
        expect(await homePage.getCartCount()).toBe("1");
    });

    users.forEach(user => {
        test(`verify login with invalid credentials ${user.id} @regression`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            loginPage.openWebsite();
            loginPage.doLogin(user.username, user.password);
            expect(await page.locator('h3[data-test="error"]')).toBeVisible();
        })
    });


})