import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { browser } from 'webdriverio';

Given('User is logged in', async () => {
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
  const productNames = await Promise.all(cartItems.map(async (item) => {
    return await item.getText();
  }));
  expect(productNames).contain(productName);
});
