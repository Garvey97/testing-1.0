// test/hooks.ts

import { Before, After, Status } from '@cucumber/cucumber';
import { browser } from 'webdriverio';

Before(async function () {
  // Code to run before each scenario
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    // Take a screenshot on failure
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
});