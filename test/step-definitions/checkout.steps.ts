import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'webdriverio';

Given('User is logged in', async () => {
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
  expect(confirmationMessage).toBe('THANK YOU FOR YOUR ORDER');
});
