import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PassengerTest extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickGuestsButton = By.id('nxm2_passenger-select-first');
    private addGuestButton = By.xpath('//*[@id="nxm2_passenger-select-first"]/div[2]/ul/li[1]/div');
    private clickDoneButton = By.xpath('//*[@id="nxm2_passenger-select-first"]/div[2]/a');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Scroll down for 200 mp. 
    async  scrollDown(driver: WebDriver) {
        await this.driver.executeScript('window.scrollBy(0, 200);');
    }

    // TEST 3. Click guests
    async clickGuests(){
        await this.findElementAndClick(this.clickGuestsButton);
    }

    // TEST 4. Add one more guest
    async addGuest(){
        await this.findElementAndClick(this.addGuestButton);
    }

    // TEST 4. Click Done
    async clickDone(){
        await this.findElementAndClick(this.clickDoneButton);
    }

 
}