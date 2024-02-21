import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class AlreadyMember extends BasePage {

    private alreadyMemberText = By.className('already-member-text');
    private logInButton = By.xpath('//div[@class="button-v2-label" and contains(text(), "SIGN IN")]');
    private loginText = By.className('registration-subtitle');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Find "Already a member?"
    async alreadyAMember(){
        await this.findElement(this.alreadyMemberText);
    }

    // TEST 2. Click on Log In Button
    async clickLogIn(){
        await this.findElementAndClick(this.logInButton);
    }

    // TEST 4. Check if login opened by comparing header to "Login and enjoy your exclusive offers at the checkout!"
    async openLogin(){
        await this.checkMatchingElements(this.loginText, "Login and enjoy your exclusive offers at the checkout!")
    }

 
}