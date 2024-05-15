import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import { remote } from 'webdriverio';

let browser: any; // Declare the browser variable

Given('I am on the login page', async () => {
  browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://www.saucedemo.com');
});

When('I enter valid credentials', async () => {
  await browser.$('#user-name').setValue('standard_user'); // Use browser.$ to locate element and set value
  await browser.$('#password').setValue('secret_sauce'); // Use browser.$ to locate element and set value
});

When('I enter invalid credentials', async () => {
  await browser.$('#user-name').setValue('invalid_user'); // Use browser.$ to locate element and set value
  await browser.$('#password').setValue('invalid_password'); // Use browser.$ to locate element and set value
});

When('I click the login button', async () => {
  await browser.$('#login-button').click(); // Use browser.$ to locate element and click
});

Then('I should be logged in successfully', async () => {
  const url = await browser.getUrl();
  expect(url).to.contain('/inventory.html');
});

Then('I should see an error message', async () => {
  const errorMessage = await browser.$('.error-message').getText(); // Use browser.$ to locate element and get text
  expect(errorMessage).to.contain('Username and password do not match');
});


