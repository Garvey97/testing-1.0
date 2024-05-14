// wdio.conf.mjs

import { join } from 'path';
import { configureAllureReporter } from './test/support/report';
// import { defineStep } from '@cucumber/cucumber';

const config = {
  // Specify Test Files
  specs: ['./test/**/*.ts'],

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

  before: () => {
    configureAllureReporter(); // Initialize Allure Reporter
  },

  // Hooks configuration
  beforeScenario: () => {
    // Before scenario logic (optional)
  },
  afterScenario: () => {
    // After scenario logic (optional)
  },

  // TypeScript Configuration
  tsNodeOpts: {
    tsconfigFile: './tsconfig.json'
  },
};

export default config;