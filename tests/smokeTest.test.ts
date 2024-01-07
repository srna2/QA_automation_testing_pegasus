import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { SmokeTest } from "../core/page-objects/smoke-test";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let smokeTest: SmokeTest;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    smokeTest = new SmokeTest(driver);
},40000);


test("smoke_test", async () => {

    await smokeTest.acceptCookies();
    await smokeTest.searchRadioButtons();
    await smokeTest.clickOnOneWay();
    await smokeTest.fromBox();
    await smokeTest.pickAbuDhabi();
    await smokeTest.pickBelgrade();
    await smokeTest.DapartureDate();
    await smokeTest.chooseDapartureDate();
    await smokeTest.searchCheapFlights();
    await smokeTest.chooseFirstFlight();
    await smokeTest.chooseEssential();
    await smokeTest.clickOnAdd();
    await smokeTest.proceedPassengerInformation();
    await smokeTest.rejectOffer();
    await smokeTest.continueAsGuest();
    await smokeTest.clickOnBoxName();
    await smokeTest.insertName();
    await smokeTest.clickOnBoxSurname();
    await smokeTest.clickDay();
    await smokeTest.enterDayYearMonth();
    await smokeTest.selectGender();
    await smokeTest.selectPhone();
    await smokeTest.insertPhone();
    await smokeTest.fillOutContactDetails();
    await smokeTest.enterEmail();
    await smokeTest.insertEmail();
    await smokeTest.continueWithoutEmail();
    await smokeTest.proceedToNextFlight();
    await smokeTest.proceedToMealSelection();
    await smokeTest.clickContinueNext();
    await smokeTest.proceedToFlight();
    await smokeTest.proceedToBaggage();
    await smokeTest.proceedToExtraTravel();
    await smokeTest.proceedToPayment();
    await smokeTest.clickCardNumber();
    await smokeTest.enterCardNumber();
    await smokeTest.clickCardHolder();
    await smokeTest.enterCardHolder();
    await smokeTest.clickExpiryMonth();
    await smokeTest.enterExpiryMonth();
    await smokeTest.clickExpiryYear();
    await smokeTest.enterExpiryYear();
    await smokeTest.clickOnCvv();
    await smokeTest.enterCvv();
    await smokeTest.checkGeneralRules();
    await smokeTest.buyNow();



},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);