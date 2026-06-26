import {Page, Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    cartItemName : Locator;

    constructor(page: Page){
        super(page);
        this.cartItemName = page.locator('.inventory_item_name');
    }

}