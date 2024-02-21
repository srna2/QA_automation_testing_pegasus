import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
const { By, Key } = require('selenium-webdriver');                  //had to add this for entering

export class TestSearch extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickSearchButton = By.xpath('//div[@class="header-search"]/form/input');
    private goBack = By.className('header-logo');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Find the Search box and click on it.
    async clickSearch(){
        await this.findElementAndClick(this.clickSearchButton);
    }

    // TEST 3. Send data to the search input.
    async searchForCheapFlights(){
        await this.fillInputField(this.clickSearchButton, testData.data.searchData);
        await this.pressEnterKey();
    }

    // TEST 4. Press enter key.
    // Since there is no a functional visible search button on the page, we had to add the function which
    // will press enter key on the keyboard.
    async pressEnterKey() {
        await this.driver.actions().sendKeys(Key.ENTER).perform();
    }

    // TEST 2. Wait for the result and go back to home page.
    async goToHomePage(){
        await this.findElementAndClick(this.goBack);
    }

}