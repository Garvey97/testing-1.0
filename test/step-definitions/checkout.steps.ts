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

When('User adds {string} to the cart', async (productName: string) => {
  await browser.click(`[data-test="add-to-cart-${productName}"]`);
});

When('User proceeds to checkout', async () => {
  await browser.click('.shopping_cart_link');
  await browser.click('[data-test="checkout"]');
});

When('User enters checkout information', async () => {
  await browser.setValue('[data-test="firstName"]', 'John');
  await browser.setValue('[data-test="lastName"]', 'Doe');
  await browser.setValue('[data-test="postalCode"]', '12345');
  await browser.click('[data-test="continue"]');
});

When('User confirms the purchase', async () => {
  await browser.click('[data-test="finish"]');
});

Then('User should see the order confirmation', async () => {
  const confirmationMessage = await browser.getText('.complete-header');
  expect(confirmationMessage).to.equal('THANK YOU FOR YOUR ORDER');
});

// Clean up the browser session after all scenarios
After(async () => {
  if (browser) {
    await browser.deleteSession(); // Close the browser session
  }
});
