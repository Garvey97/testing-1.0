// wdio.conf.mjs

import { join } from 'path';
// import { defineStep } from '@cucumber/cucumber';

const config = {
  // Specify Test Files
  specs: ['./test/**/*.js'],

  // Configure Cucumber
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./test/step-definitions/*.ts'], // Path to step definitions
    // format: ['json:./test/reports/cucumber-report.json'], // Output cucumber json report
  },

  // Browser and WebDriver Configuration
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      // Chrome options if needed
    }
  }],

  // Timeout settings
  timeout: 30000, // Timeout in milliseconds

  // Retry settings
  specFileRetries: 2, // Number of retries for failing test files
  specFileRetriesDelay: 1000, // Delay between retries in milliseconds

  // Allure Reporter Configuration
  reporters: [
    ['allure', {
      outputDir: join(process.cwd(), './test/allure-results'),
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
      disableWebdriverStepsReporting: true,
    }],
  ],

  // Hooks Configuration
  beforeScenario(uri, feature, scenario) {
    // Code to run before each scenario
  },

  afterScenario(uri, feature, scenario, result, sourceLocation) {
    // Code to run after each scenario
  },

  // TypeScript Configuration
  tsNodeOpts: {
    tsconfigFile: './tsconfig.json'
  },

  // compileOpts: {
  //   typescriptOpts: {
  //     tsconfigFile: './tsconfig.json'
  //   }
  // },

  // Other Webdriver.io Options
};

// Register step definitions using defineStep from Cucumber
// import { loginSteps } from './test/step-definitions/login.steps';
// loginSteps(defineStep);

export default config;