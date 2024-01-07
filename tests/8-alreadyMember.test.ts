import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { AlreadyMember } from "../core/page-objects/8-already-member";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let alreadyMember: AlreadyMember;

beforeAll(async () => {
    driver = await createDriver(testData.url.signup_page);
    alreadyMember = new AlreadyMember(driver);
},40000);


test("already_member_test", async () => {

    await alreadyMember.alreadyAMember();
    await alreadyMember.clickLogIn();
    await alreadyMember.openLogin();
   
},40000);


afterAll(async () => {
    await quitDriver(driver);
},20000);