// report.ts

import { AllureReporter } from '@wdio/allure-reporter';

declare global {
  namespace WebdriverIO {
    interface Browser {
      reporter: {
        allure: AllureReporter;
      };
    }
  }
}

export function configureAllureReporter() {
  const allure = new AllureReporter({
    outputDir: './allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  });
  allure.cleanAllureDir();
  allure.writeCategories([
    { name: 'Critical', matchedStatuses: ['failed'] },
    { name: 'High', matchedStatuses: ['failed'] },
    { name: 'Medium', matchedStatuses: ['failed'] },
    { name: 'Low', matchedStatuses: ['failed'] },
  ]);
  browser.reporter = { allure };
}
