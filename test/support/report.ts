import { AllureRuntime, InMemoryAllureWriter } from '@wdio/allure-reporter'
import { join } from 'path';

// Initialize Allure runtime and specify output directory
const allureOutputDir = join(process.cwd(), './test/allure-results');
const allure = new AllureRuntime({ resultsDir: allureOutputDir });

// Configure Allure reporter with custom settings
export function configureAllureReporter(): void {
  const writer = new InMemoryAllureWriter();
  allure.setWriter(writer);

  // Add custom reporter options here
  allure.reporter.options.disableWebdriverScreenshotsReporting = false;
  allure.reporter.options.disableWebdriverStepsReporting = true; // Set as needed
}

// Function to attach screenshots to Allure report
export function attachScreenshotToAllureReport(screenshot: Buffer): void {
  allure.createAttachment(
    'Screenshot',
    screenshot,
    'image/png'
  );
}

export default allure;