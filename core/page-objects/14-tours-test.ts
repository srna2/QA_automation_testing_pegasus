import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class ToursTest extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private toursButton = By.id('additional_service_tours_Activities_functions');
    private clickCountryBox = By.className('tooltip-selector location-selector__dropdown location-searchbar__location-selector');
    private clickCountry = By.xpath('//button[@class="location-selector__item" and contains(text(), "Saudi Arabia")]');
    private clickGoButton = By.className('location-searchbar__button');
    private clickOnFilter = By.className('nested-checkbox categories-list__item');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Click on the "Tours & Activities" button.
    async clickOnToursAndActivities() {
        await this.waitAndClick(this.toursButton, 10000);
    }

    // TEST 3. Select the box with offered countries.
    async clickOnCountriesBox(){
        await this.findElementAndClick(this.clickCountryBox);
    }

    // TEST 4. Select the country. 
    async clickOnCountry(){
        await this.findElementAndClick(this.clickCountry);
    }

    // TEST 5. Click on Go.
    async clickGo(){
        await this.findElementAndClick(this.clickGoButton);
    }

    // TEST 6. Select filer "Sightseeing tours".
    async chooseFilter(){
        await this.findElementAndClick(this.clickOnFilter);
    }


 
}