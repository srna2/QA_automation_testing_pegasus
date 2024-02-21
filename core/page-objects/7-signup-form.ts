import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class SignupForm extends BasePage {

    private enterYourName = By.xpath('//*[@id="page"]/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[1]/div/div/div/input');
    private enterYourSurname = By.xpath('//*[@id="page"]/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[2]/div/div/div/input');
    private enterYourNumber = By.xpath('//*[@id="page"]/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[3]/div/div[2]/div[1]/div/div/input');
    private enterYourEmail = By.xpath('//*[@id="page"]/div[3]/div/div[2]/div/form/div/div[3]/div[1]/div[4]/div/div/div/input');
    private robotButton = By.xpath('//*[@id="recaptcha-anchor"]');        //proveriti za robota
    private checksmsBox = By.xpath('//span[@class="MuiTypography-root MuiFormControlLabel-label checkbox-label checkbox-small-label MuiTypography-body1" and contains(text(), "SMS")]');
    private checkTerms = By.xpath('//div[@class="terms-and-conditions"]/label');
    private becomeMemberButton = By.className('submit-button-container signup-form-button-container');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Enter Name.
    async enterName(){
        await this.fillInputField(this.enterYourName, testData.signup.name);
    }

    // TEST 2. Enter Surname.
    async enterSurname(){
        await this.fillInputField(this.enterYourSurname, testData.signup.surname);
    }

    // TEST 3. Enter phone number.
    async enterNumber(){
        await this.fillInputField(this.enterYourNumber, testData.signup.number);
    }

    // TEST 4. Enter email.
    async enterEmail(){
        await this.fillInputField(this.enterYourEmail, testData.signup.email);
    }

    // // TEST 5. Not a robot confirmation. 
    // Step 5 is not executed because it asks for "not-a-robot" confirmation and cannot be executed
    // by a machine for logical reasons.
    // async notaRobot(){
    //     await this.findElementAndClick(this.robotButton);
    // }

     // TEST 6. Contact pereferences.
     async contactPreferences(){
        await this.findElementAndClick(this.checksmsBox);
    }

    // TEST 7. Accept Terms & Conditions.
    async termsAndConditions(){
        await this.findElementAndClick(this.checkTerms);
    }

    // TEST 8. Click on the "Become a member" button.  
    async becomeMember(){
        await this.findElementAndClick(this.becomeMemberButton);
    }


 
}