import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class BaggageAllowance extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private addBaggageButton = By.xpath('//a[@href="https://www.flypgs.com/en/travel-services/flight-services/additional-baggage"]');
    private returnHome = By.className('header-logo');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 3. Click on the button „Add Baggage“.
    async addBaggage(){
        await this.findElementAndClick(this.addBaggageButton);
    }

    // TEST 3. Return to the homepage.
    async goToHomePage(){
        await this.findElementAndClick(this.returnHome);
    }

 
}