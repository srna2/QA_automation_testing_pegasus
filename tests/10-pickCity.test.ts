import { readFileSync } from "fs";
import * as path from "path";
import { By, WebDriver, WebElement, until } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { PickCity } from "../core/page-objects/10-pick-city";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let pickCity: PickCity;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    pickCity = new PickCity(driver);
},40000);


test("pick_city_test", async () => {

    await pickCity.acceptCookies();
    await pickCity.departureCity();
    await pickCity.pickAbuDhabi();
    await pickCity.pickBelgrade();


},40000);

afterAll(async () => {
    await quitDriver(driver);
},20000);