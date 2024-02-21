import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class JoiningButton extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickJoin = By.className('nxm2_btn2 nxm2_btn2-orange');
    private checkSignUpTitle = By.className('registration-title');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Click button for joining
    async joinBolbol(){
        await this.findElementAndClick(this.clickJoin);
    }

    // TEST 3. Make sure page is opened by checking title.
    async checkSignUp(){
        await this.checkMatchingElements(this.checkSignUpTitle, "Sign Up Free");
    }

 
}