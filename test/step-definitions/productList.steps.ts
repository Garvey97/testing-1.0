import { Given, When, Then } from '@cucumber/cucumber';
import { browser } from 'webdriverio';

Given('User is logged in', async () => {
  await browser.url('https://www.saucedemo.com/');
  await browser.setValue('[data-test="username"]', 'standard_user');
  await browser.setValue('[data-test="password"]', 'secret_sauce');
  await browser.click('[type="submit"]');
});

When('User navigates to the product list page', async () => {
  // Navigate to the product list page (if needed)
  // Example: await browser.url('https://www.saucedemo.com/inventory.html');
});

Then('User should see the list of available products', async () => {
  const productItems = await browser.$$('.inventory_item');
  expect(productItems.length).toBeGreaterThan(0);
  // Additional assertions can be added to verify specific products in the list
});
