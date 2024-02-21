import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SmokeTest extends BasePage {

    private clickAgree = By.id('nxm2CookieSubmitButton');
    private radioArea = By.xpath('//div[@class="col-lg-12"]/nav[1]');
    private oneWayButton = By.className('nav__link2 one_way');
    private clickFromBox = By.xpath('//div[@class="row nxm-360-search-selected-airports"]/div[1]');
    private pickAbuD = By.className('flySearch-airport-list-item-content nxm-360-search-select-airpot-list-li nxm-360-port_AUH');
    private pickBg = By.xpath('//*[@id="nxm-360-arrival"]/div[2]/div[3]/div[3]/ul/li[12]');
    private clickDeparture = By.xpath('//div[@class="row nxm-360-search-selected-airports"]/div[4]');
    private clickDepartureDate = By.xpath('/html/body/section[3]/div/div[2]/div[1]/div/div/div/div/ul/li/div/form/div[4]/div/div/div[4]/div[1]/div[2]/div[6]/div[1]/table/tbody/tr[5]/td[1]');
    private clickOnSearch = By.className('nxm2_btn nxm2_btn-full nxm2_btn-dark_orange adultSoldierSelection');
    private clickOnFlight = By.className('flight-info-row');
    private clickEssential = By.xpath('/html/body/div[2]/div/div[4]/div[2]/div/div[4]/div[2]/div[2]/div[3]/div/div/div[1]/div[2]/div[2]/button');
    private clickAdd = By.className('button-v2 button-v2-fill button-v2-secondary flex-button button-v2-large');
    private clickOnProceed = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large');
    private clickReject = By.className('button-v2 button-v2-outlined bundle-upgrade-reject-button button-v2-large');
    private continueAsGuestButton = By.className('button-v2 button-v2-text button-v2-small');
    private clickName = By.className('MuiInputBase-root MuiInput-root MuiInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInput-formControl');
    private enterYourName = By.className('MuiInputBase-root MuiInput-root MuiInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInput-formControl');
    private clickSurname = By.xpath('//div[@testid="passengerSurname"]');
    private enterYourSurname = By.xpath('//div[@testid="passengerSurname"]');
    private clickOnDay = By.xpath('//div[@class="text-field date-text-element"]/div[@testid="dayInput"]');
    private selectFemale = By.xpath('//span[@testid="genderF"]');
    private clickOther = By.xpath('//span[@testid="foreignCitizen"]');
    private enterPhone = By.xpath('/html/body/div[2]/div/div[4]/div[2]/div[2]/div[2]/div/div[1]/div/div/form/div[1]/div/div[7]/div[1]/div/div[2]/div[1]/div/div/input');
    private contactDetails = By.id('contactForm');
    private clickOnEmail = By.className('MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-error Mui-error Mui-required Mui-required');
    private clickContinue = By.className('button-v2 button-v2-fill button-v2-secondary submit-button info-form-submit-button button-v2-large button-v2-sticky');
    private continueThis = By.className('button-v2 button-v2-text continue-button button-v2-xsmall');
    private proceedNext = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large button-v2-sticky');
    private proceedMeal = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large button-v2-sticky');
    private continueNext = By.className('button-v2 button-v2-outlined horizontal-button-list-item button-v2-large');
    private proceedFlight = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large button-v2-sticky');
    private proceedBaggage = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large button-v2-sticky');
    private proceedExtra = By.className('button-v2 button-v2-fill button-v2-primary submit-button button-v2-large button-v2-sticky');
    private proceedPayment = By.className('button-v2 button-v2-fill button-v2-secondary submit-button button-v2-large button-v2-sticky');
    private clickCard = By.className('MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-error Mui-error');
    private clickHolder = By.xpath('/html/body/div[2]/div/div[4]/div[2]/div/div/div[3]/div[2]/form/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/div[1]/div/div[1]/div[2]/div/div/label');
    private expiryMonth = By.xpath('//div[@testid="expiryMonthField"]');
    private expiryYear = By.xpath('//div[@testid="expiryYearField"]');
    private clickCvv = By.className('text-field security-number-field');
    private clickGeneralRules = By.className('MuiButtonBase-root MuiIconButton-root jss1 MuiCheckbox-root checkbox MuiCheckbox-colorSecondary MuiIconButton-colorSecondary');
    private clickBuyNow = By.xpath('//button[@testid="paymentSubmitButton"]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Accept cookies.
    async acceptCookies(){
        await this.findElementAndClick(this.clickAgree);
    }

    // TEST 2. Locate the part where the radio buttons are.
    async searchRadioButtons(){
        await this.findElement(this.radioArea);
    }

    // TEST 3. Click on the “One Way” radio button.
    async clickOnOneWay(){
        await this.findElementAndClick(this.oneWayButton);
    }

    // TEST 4. Click on the “From” box.
    async fromBox(){
        await this.findElementAndClick(this.clickFromBox);
    }

    // TEST 5. Choose the airport from which you are flying (Abu Dhabi).
    async pickAbuDhabi(){
        await this.findElementAndClick(this.pickAbuD);
    }

    // TEST 6.. Pick a city from the dropdown menu where you want to fly to. 
    async pickBelgrade(){
        await this.findElementAndClick(this.pickBg);
    } 

    // TEST 7. Click on the “Departure date” box.
    async DapartureDate(){
        await this.findElementAndClick(this.clickDeparture);
    }

    // TEST 8. Select the date (01th February).
    async chooseDapartureDate(){
        await this.findElementAndClick(this.clickDepartureDate);
    }

    // TEST 9. Find the “Search cheap flights” button and click on it.
    async searchCheapFlights(){
        await this.findElementAndClick(this.clickOnSearch);
    }

    // TEST 10. On the next page, find the first offered flight and choose it.
    async chooseFirstFlight(){
        await this.findElementAndClick(this.clickOnFlight);
    }

    // TEST 11. From the dropdown menu, choose “Essential” type of accommodation.
    async chooseEssential(){
        await this.findElementAndClick(this.clickEssential);
    }

    // TEST 12. Find the “Add” button and click on it.
    async clickOnAdd(){
        await this.findElementAndClick(this.clickAdd);
    }

    // TEST 13. Find the “Proceed to passenger information” button and click on it.
    async proceedPassengerInformation(){
        await this.findElementAndClick(this.clickOnProceed);
    }

    // TEST 14. In the popup window, find the “Reject Offer” button and click on it.
    async rejectOffer(){
        await this.findElementAndClick(this.clickReject);
    }

    // TEST 15. Find the “Continue as a guest” button and click on it.
    async continueAsGuest(){
        await this.findElementAndClick(this.continueAsGuestButton);
    }

    // TEST 16. Click on the mandatory box “Name”.
    async clickOnBoxName(){
        await this.findElementAndClick(this.clickName);
    }
    
    // TEST 17. Insert your name.
    async insertName(){
        await this.fillInputField(this.enterYourName, testData.smoke.name);
    }

    // TEST 18. Click on the mandatory box “Surname”.
    async clickOnBoxSurname(){
        await this.findElementAndClick(this.clickSurname);
    }

    // TEST 19. Insert your surname.
    async insertSurname(){
        await this.fillInputField(this.enterYourSurname, testData.smoke.surname);
    }

    // TEST 20. Click on the “Day” box.
    async clickDay(){
        await this.findElementAndClick(this.clickOnDay);
    }

    // TEST 21. Enter the day, month and year of your birth.
    async enterDayYearMonth(){
        await this.fillInputField(this.clickDay, testData.smoke.date);
    }

    // TEST 22. Find the “Female” checkbox under Gender and check it.
    async selectGender(){
        await this.findElementAndClick(this.selectFemale);
    }

    // TEST 23. Find the “Other” checkbox under Nationality and check it.
    async selectOther(){
        await this.findElementAndClick(this.clickOther);
    }

    // TEST 24. Find the mobile phone box and click on it (TR(+90) by default).
    async selectPhone(){
        await this.findElementAndClick(this.enterPhone);
    }

    // TEST 25. Insert your phone number.
    async insertPhone(){
        await this.fillInputField(this.enterPhone, testData.smoke.phone);
    }

    // TEST 26. Find the “Fill out your Contact Details” box and click on it.
    async fillOutContactDetails(){
        await this.findElementAndClick(this.contactDetails);
    }

    // TEST 27. Click on the mandatory field “Email”.
    async enterEmail(){
        await this.findElementAndClick(this.clickOnEmail);
    }

    // TEST 28. Insert your email.
    async insertEmail(){
        await this.fillInputField(this.clickOnEmail, testData.smoke.email);
    }

    // TEST 29. Find the “Continue” button and click on it.
    async continueButton(){
        await this.findElementAndClick(this.clickContinue);
    }

    // TEST 30. In the popup window, find “Continue without sign in” and click on it.
    async continueWithoutEmail(){
        await this.findElementAndClick(this.continueThis);
    }

    // TEST 31. In the seat selection page, find the “Proceed to next flight” button and click on it.
    async proceedToNextFlight(){
        await this.findElementAndClick(this.proceedNext);
    }

    // TEST 32. Find the “Proceed to meal selection” button and click on it.
    async proceedToMealSelection(){
        await this.findElementAndClick(this.proceedMeal);
    }

    // TEST 33. In the popup window, choose the “Continue” button.
    async clickContinueNext(){
        await this.findElementAndClick(this.continueNext);
    }

    // TEST 34. In the meal selection page, find the “Proceed to next flight” button and click on it.
    async proceedToFlight(){
        await this.findElementAndClick(this.proceedFlight);
    }

    // TEST 35. Find the “Proceed to baggage selection” button and click on it.
    async proceedToBaggage(){
        await this.findElementAndClick(this.proceedBaggage);
    }

    // TEST 36. Find the “Proceed to extra travel services” button and click on it.
    async proceedToExtraTravel(){
        await this.findElementAndClick(this.proceedExtra);
    }

    // TEST 37. Find the “Proceed to payment” button and click on it.
    async proceedToPayment(){
        await this.findElementAndClick(this.proceedPayment);
    }

    // TEST 38. Click on the Card Number Box.
    async clickCardNumber(){
        await this.findElementAndClick(this.clickCard);
    }

    // TEST 39. Enter card number.
    // Test could end here or at step 44 because it checks the card number automatically
    // and doesn’t allow proceeding further until it is a real one.
    async enterCardNumber(){
        await this.fillInputField(this.clickCard, testData.smoke.cardnumber);
    }

    // TEST 40. Click on the “Credit card holder” box.
    async clickCardHolder(){
        await this.findElementAndClick(this.clickHolder);
    }

    // TEST 41. Enter credit card holder name.
    async enterCardHolder(){
        await this.fillInputField(this.clickHolder, testData.smoke.holder);
    }

    // TEST 42. Click on the “Month” box.
    async clickExpiryMonth(){
        await this.findElementAndClick(this.expiryMonth);
    }

    // TEST 43. Enter the month of expiration.
    async enterExpiryMonth(){
        await this.fillInputField(this.expiryMonth, testData.smoke.expirymonth);
    }

    // TEST 44. Click on the “Year” box.
    async clickExpiryYear(){
        await this.findElementAndClick(this.expiryYear);
    }

    // TEST 45. Enter expiry year.
    async enterExpiryYear(){
        await this.fillInputField(this.clickExpiryYear, testData.smoke.expiryyear);
    }

    // TEST 46. Click on the “CVV” box.
    async clickOnCvv(){
        await this.findElementAndClick(this.clickCvv);
    }

    // TEST 47. Enter the three-digit security number.
    async enterCvv(){
        await this.fillInputField(this.clickCvv, testData.smoke.cvv);
    }

    // TEST 48. (potential termination step) Find the general rules, privacy 
    // policy and terms & conditions checkbox and check it.
    async checkGeneralRules(){
        await this.findElementAndClick(this.clickGeneralRules);
    }
    
    // TEST 49. Find the “Buy” button and click on it. (this button is blocked until card 
    // information is real, this step will not be executed)
    async buyNow(){
        await this.findElementAndClick(this.clickBuyNow);
    }

}