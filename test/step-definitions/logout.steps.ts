import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'webdriverio';

Given('User is logged in', async () => {
  await browser.url('https://www.saucedemo.com/');
  await browser.setValue('[data-test="username"]', 'standard_user');
  await browser.setValue('[data-test="password"]', 'secret_sauce');
  await browser.click('[type="submit"]');
});

When('User clicks on the logout button', async () => {
  await browser.click('.bm-burger-button'); // Click on the menu button
  await browser.click('#logout_sidebar_link'); // Click on the logout link
});

Then('User should be logged out successfully', async () => {
  const loginButton = await browser.$('[data-test="login-button"]');
  const isDisplayed = await loginButton.isDisplayed();
  expect(isDisplayed).toBe(true);
});
