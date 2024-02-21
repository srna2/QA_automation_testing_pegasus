import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";

export class PickDate extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private clickDeparture = By.xpath('//div[@class="row nxm-360-search-selected-airports"]/div[4]');
    private clickDepartureDate = By.xpath('//*[@id="search-flight-datepicker-departure"]/div[6]/div[1]/table/tbody/tr[5]/td[3]');
    private clickReturn = By.className('form_control JS__datepicker search-flight-datepicker search-flight-datepicker-arrival nxm-returnDate');
    private clickReturnDate = By.xpath('//*[@id="search-flight-datepicker-arrival"]/div[6]/div[2]/table/tbody/tr[1]/td[5]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Open Departure Date Picker.
    async DapartureDate(){
        await this.findElementAndClick(this.clickDeparture);
    }

    // TEST 3. As the first date, select the wanted departure date.
    async chooseDapartureDate(){
        await this.findElementAndClick(this.clickDepartureDate);
    }

    // TEST 4. Open Return Date Picker.
    async ReturnDate(){
        await this.findElementAndClick(this.clickReturn)
    }

    // TEST 5. As the second date, select the wanted return date.
    async chooseReturnDate(){
        await this.findElementAndClick(this.clickReturnDate);
    }
 
}