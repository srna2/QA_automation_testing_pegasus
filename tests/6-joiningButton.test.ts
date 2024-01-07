import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { JoiningButton } from "../core/page-objects/6-joining-button";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let joiningButton: JoiningButton;

beforeAll(async () => {
    driver = await createDriver(testData.url.bolbol_page);
    joiningButton = new JoiningButton(driver);
},40000);


test("joining_button_test", async () => {

    await joiningButton.acceptCookies();
    await joiningButton.joinBolbol();
    await joiningButton.checkSignUp();


   
},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);