import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class RadioButtons extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private logoRefresh = By.className('header-logo');
    private radioArea = By.xpath('//div[@class="col-lg-12"]/nav[1]');
    private oneWayButton = By.className('nav__link2 one_way');
    private returnButton = By.xpath('//nav[@class="js-nav2 direction-btns"]/ul/li[2]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Go to home page (since program already opens the page, 
    // we have put function to refresh the logo as assurance that the home page is opened)
    async goToHomePage(){
        await this.findElementAndClick(this.logoRefresh);
    }

    // TEST 3. Locate the part where the radio buttons are.
    async searchRadioButtons(){
        await this.findElement(this.radioArea);
    }

    // TEST 4. Click on the One Way radio button.
    async clickOnOneWay(){
        await this.findElementAndClick(this.oneWayButton);
    }

    // TEST 5. Click on the Return radio button.
    async clickReturn(){
        await this.findElementAndClick(this.returnButton);
    }
 
}