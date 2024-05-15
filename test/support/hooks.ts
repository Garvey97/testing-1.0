import { Before, After, Status } from '@cucumber/cucumber';
import { remote } from 'webdriverio';

let browser: any; // Declare the browser variable

// Before hook: Runs before each scenario
Before(async function () {
  // Initialize browser session
  browser = await remote({
    capabilities: {
      browserName: 'chrome'
    }
  });
});

// After hook: Runs after each scenario
After(async function (scenario) {
  // Check if scenario result is defined and has failed status
  if (scenario.result && scenario.result.status === Status.FAILED) {
    // Take a screenshot on failure
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png'); // Attach screenshot to the test report
  }

  // Clean up browser session after scenario
  if (browser) {
    await browser.deleteSession(); // Close the browser session
  }
});
