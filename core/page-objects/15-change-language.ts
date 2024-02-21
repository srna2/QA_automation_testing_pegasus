import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class ChangeLanguage extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickLanguage = By.id('nexum_language_icon');
    private clickDeutsch = By.xpath('//ul[@class="header-languages-list"]/li[3]/div');
    private buttonDE = By.xpath('//span[@class="current-language-code" and contains(text(), "DE")]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Click to change language.
    async chooseLanguages(){
        await this.findElementAndClick(this.clickLanguage);
    }

    // TEST 3. Choose DE
    async chooseDeutsch(){
        await this.findElementAndClick(this.clickDeutsch);
    }

    // TEST 4. Check if DE is selected by comparing shortened language name.
    async assureDe(){
        await this.checkMatchingElements(this.buttonDE, "DE");
    }

 
}