import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from 'chai';
import { remote } from 'webdriverio';

let browser: any; // Declare the browser variable

Given('User is logged in', async () => {
  browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });

  await browser.url('https://www.saucedemo.com/');
  await browser.setValue('[data-test="username"]', 'standard_user');
  await browser.setValue('[data-test="password"]', 'secret_sauce');
  await browser.click('[type="submit"]');
});

When('User navigates to the product list page', async () => {
  await browser.url('https://www.saucedemo.com/inventory.html');
});

Then('User should see the list of available products', async () => {
  const productItems = await browser.$$('.inventory_item');
  expect(productItems.length).to.be.greaterThan(0);
  // Additional assertions can be added to verify specific products in the list
});

// Clean up the browser session after all scenarios
After(async () => {
  if (browser) {
    await browser.deleteSession(); // Close the browser session
  }
});
