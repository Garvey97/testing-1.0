"use strict";
// login.steps.ts
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
(0, cucumber_1.Given)('I am on the login page', async () => {
    await browser.url('https://www.saucedemo.com');
});
(0, cucumber_1.When)('I enter valid credentials', async () => {
    await browser.$('#user-name').setValue('standard_user'); // Use browser.$ to locate element and set value
    await browser.$('#password').setValue('secret_sauce'); // Use browser.$ to locate element and set value
});
(0, cucumber_1.When)('I enter invalid credentials', async () => {
    await browser.$('#user-name').setValue('invalid_user'); // Use browser.$ to locate element and set value
    await browser.$('#password').setValue('invalid_password'); // Use browser.$ to locate element and set value
});
(0, cucumber_1.When)('I click the login button', async () => {
    await browser.$('#login-button').click(); // Use browser.$ to locate element and click
});
(0, cucumber_1.Then)('I should be logged in successfully', async () => {
    const url = await browser.getUrl();
    (0, chai_1.expect)(url).to.contain('/inventory.html');
});
(0, cucumber_1.Then)('I should see an error message', async () => {
    const errorMessage = await browser.$('.error-message').getText(); // Use browser.$ to locate element and get text
    (0, chai_1.expect)(errorMessage).to.contain('Username and password do not match');
});
