import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    usernameInput : Locator;
    passwordInput : Locator;
    loginButton : Locator;

    constructor(page: Page){
        super(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async openWebsite(){
        await this.page.goto(process.env.BASEURL!);
    }

    async doLogin(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}