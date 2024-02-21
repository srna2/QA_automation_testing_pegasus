import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PickCity extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickDeparture = By.xpath('//div[@class="row nxm-360-search-selected-airports"]/div[1]');
    private pickAbuD = By.className('flySearch-airport-list-item-content nxm-360-search-select-airpot-list-li nxm-360-port_AUH');
    private pickBg = By.xpath('//*[@id="nxm-360-arrival"]/div[2]/div[3]/div[3]/ul/li[12]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Find the city of departure box and click on it.
    async departureCity(){
        await this.findElementAndClick(this.clickDeparture);
    }

    // TEST 3. Pick a City from dropdown menu. 
    async pickAbuDhabi(){
        await this.findElementAndClick(this.pickAbuD);
    }

    // TEST 4. Pick a city from the dropdown menu where you want to fly to. 
    async pickBelgrade(){
        await this.findElementAndClick(this.pickBg);
    }


 
}