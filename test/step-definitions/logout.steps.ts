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

When('User navigates to the product page', async () => {
  await browser.url('https://www.saucedemo.com/inventory.html');
});

When('User adds {string} to the cart', async (productName: string) => {
  await browser.click(`[data-test="add-to-cart-${productName}"]`);
});

When('User logs out', async () => {
  const menuButton = await browser.$('.bm-burger-button');
  await menuButton.click();
  const logoutLink = await browser.$('#logout_sidebar_link');
  await logoutLink.click();
});

Then('User should be logged out successfully', async () => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).to.equal('https://www.saucedemo.com/');
});

// Clean up the browser session after all scenarios
After(async () => {
  if (browser) {
    await browser.deleteSession(); // Close the browser session
  }
});
