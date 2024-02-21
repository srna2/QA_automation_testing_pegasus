import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class CurrencyChanger extends BasePage {

    private currencyBox = By.xpath('//div[@class="currency-selector"]/button');
    private currency = By.xpath('//div[@class="menu currency-selector-menu"]/div[4]/div');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Scroll up for -200 mp. 
    async  scrollUp(driver: WebDriver) {
        await this.driver.executeScript('window.scrollBy(0, -200);');
    }

    // TEST 2. Click on the currency changer box.
    async clickOnCurrencyBox(){
        await this.findElementAndClick(this.currencyBox);
    }

    // TEST 3. Click on the wanted currency (EUR).
    async chooseCurrency(){
        await this.findElementAndClick(this.currency);
    }

 
}