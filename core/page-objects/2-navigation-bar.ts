import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
export class NavigationBar extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private logoRefresh = By.className('header-logo');
    private hoverMore = By.id('nexum_other_menu_label');
    private clickBaggage = By.id('other_user_information_4_label');
    private checkBaggage = By.className('subheader__title');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:
    
    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Go to home page (since program already opens the page, 
    // we have put function to refresh the logo as assurance that the home page is opened).
    async goToHomePage(){
        await this.findElementAndClick(this.logoRefresh);
    }

    // TEST 3. Find the „More“ option in the navigation bar hover and click on it.
    async findMore(){
        await this.hoverElement(this.findElement(this.hoverMore));
    }

    // TEST 4. Get to the option „Baggage allowance“ and click on it.
    async clickBaggageAllowance(){
        await this.findElementAndClick(this.clickBaggage);
    }

    // TEST 5. Assert if the url worked by comparing the "Baggage allowance" header.
    async assertUrl(){
        await this.checkMatchingElements(this.checkBaggage, "Baggage Allowance");
    }
 

 
}