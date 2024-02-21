import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class BolbolButton extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickBolbolButton = By.id('nexum_bolbol_menu_label');
    private bolbolText = By.className('bolbol-header text-orange');
    
    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Find the button and click on it.
    async clickBolbol(){
        await this.findElementAndClick(this.clickBolbolButton);
    }

    // TEST 3. Assert if the new page is correctly opened by comparing header to "WHAT IS BOLBOL?".
    async checkBolbolPage(){
        await this.checkMatchingElements(this.bolbolText, "WHAT IS BOLBOL?");
    }
 

 
}