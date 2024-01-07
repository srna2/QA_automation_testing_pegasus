import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { PickDate } from "../core/page-objects/11-pick-date";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let pickDate: PickDate;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    pickDate = new PickDate(driver);
},40000);


test("pick_date_test", async () => {

    await pickDate.acceptCookies();
    await pickDate.DapartureDate();
    await pickDate.chooseDapartureDate();
    await pickDate.chooseReturnDate();
    await pickDate.chooseReturnDate();

},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);