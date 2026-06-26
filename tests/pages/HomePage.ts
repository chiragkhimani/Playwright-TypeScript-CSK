import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    cartIcon : Locator;
    burgerMenu : Locator;
    logoutLink : Locator;

    constructor(page: Page){
        super(page);
        this.cartIcon = page.locator('.shopping_cart_link span');
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.getByText('Logout');
    }

    async logout(){
        await this.burgerMenu.click();
        await this.logoutLink.click();
    }

    async addToCart(productName: string){
        const addToCartButton = this.page.locator(`//div[@class='inventory_item_name ' and text()='${productName}']
            /ancestor::div[@class='inventory_item_description']//button`);
        await addToCartButton.click();
    }

    async getCartCount(){
        return await this.cartIcon.textContent();
    }

    async clickOnCartIcon(){
        await this.cartIcon.click();
    }
}