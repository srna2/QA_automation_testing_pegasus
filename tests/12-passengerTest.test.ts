import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { PassengerTest } from "../core/page-objects/12-passenger-test";




const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let passengerTest: PassengerTest;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    passengerTest = new PassengerTest(driver);
},40000);


test("passenger_test_test", async () => {

    await passengerTest.acceptCookies();
    await passengerTest.scrollDown(driver);
    await passengerTest.clickGuests();
    await passengerTest.addGuest();
    await passengerTest.clickDone();

},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);