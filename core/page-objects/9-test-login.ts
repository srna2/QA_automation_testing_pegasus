import BasePage from "./base-page";
import { WebDriver, By } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));
export class TestLogin extends BasePage {

    private enterPhoneNumber = By.className('MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart');
    private enterYourPassword = By.xpath('//input[@class="MuiInputBase-input MuiInput-input" and @type="password"]');
    private loginButton = By.className('submit-button-container login-button-container');
    private clickRobot = By.className('rc-anchor-center-item rc-anchor-checkbox-label');

    constructor(driver: WebDriver) {
        super(driver);
    }

    // TEST STEPS:

    // TEST 1. Enter phone number.
    async enterPhone(){
        await this.fillInputField(this.enterPhoneNumber, testData.login.number);
    }

    // TEST 2. Enter password.
    async enterPassword(){
        await this.fillInputField(this.enterYourPassword, testData.login.password);
    }

    // // TEST 3. Not a robot confirmation. 
    // Step 5 is not executed because it asks for "not-a-robot" confirmation and cannot be executed
    // by a machine for logical reasons.
    // async notARobot(){
    //     await this.findElementAndClick(this.clickRobot);
    // }

    // TEST 4. Click Log In button.
    async clickLogIn(){
        await this.findElementAndClick(this.loginButton);
    }

 
}