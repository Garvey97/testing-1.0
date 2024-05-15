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
  // Navigate to the product page (if needed)
  await browser.url('https://www.saucedemo.com/inventory.html');
});

When('User adds {string} to the cart', async (productName: string) => {
  await browser.click(`[data-test="add-to-cart-${productName}"]`);
});

Then('The product {string} should be added to the shopping cart', async (productName: string) => {
  const cartIcon = await browser.$('.shopping_cart_link');
  await cartIcon.click();
  const cartItems = await browser.$$('.inventory_item_name');
  const productNames = await Promise.all(cartItems.map(async (item: any) => {
    return await item.getText();
  }));
  expect(productNames).to.include(productName); // Use 'to.include' for Chai expect assertion
});

// Clean up the browser session after all scenarios
After(async () => {
  if (browser) {
    await browser.deleteSession(); // Close the browser session
  }
});