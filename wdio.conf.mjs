// wdio.conf.mjs

import { join } from 'path';
import { configureAllureReporter } from './test/support/report';

// Define the configuration object
const config = {
  // Specify Test Files (Step Definitions)
  specs: ['./test/**/*.ts'],

  // Configure the Test Framework (Cucumber)
  framework: 'cucumber',

  // Cucumber Options
  cucumberOpts: {
    require: ['./test/step-definitions/*.ts'], // Path to Step Definitions
  },

  // Browser and WebDriver Configuration
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      // Chrome options if needed
    }
  }],

  // Timeout Settings
  timeout: 30000, // Timeout in milliseconds

  // Retry Settings
  specFileRetries: 2, // Number of retries for failing test files
  specFileRetriesDelay: 1000, // Delay between retries in milliseconds

  // Allure Reporter Configuration
  reporters: [
    ['allure', {
      outputDir: join(process.cwd(), './test/allure-results'),
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
      disableWebdriverStepsReporting: true, // This line is redundant
    }],
  ],

  // Hooks Configuration (Optional)
  before: () => {
    configureAllureReporter(); // Initialize Allure Reporter
  },

  // TypeScript Configuration (Optional)
  tsNodeOpts: {
    tsconfigFile: './tsconfig.json'
  },
};

// Export the configuration object
export default config;
