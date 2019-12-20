import { Given, When, Then } from "cucumber";
import {browser, element, by, By, ElementFinder, ElementArrayFinder} from 'protractor';
        Given('I will navigate to Calc Site', async function () {
            console.log("navigated to Calc Site");
            await browser.get('http://juliemr.github.io/protractor-demo/');
         });

  

         When('I add two numbers {string} and {string}', async function (string1, string2) {
            console.log("adding " + string1 + " and " + string2);
            await element(by.model("first")).sendKeys(string1);
            await element.all(by.options("value for (key, value) in operators")).get(0).click();
            await element(by.model("second")).sendKeys(string1);
         });

         Then('the output displayed should be {string}', function (result) {
           // Write code here that turns the phrase above into concrete actions
           console.log("Verifying result " + result);
           let Result: ElementFinder = element(by.binding("latest"));
           expect(Result.getText()).toEqual(result);
         });