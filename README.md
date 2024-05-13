# BDD Testing Framework with Webdriver.io, TypeScript, and Cucumber

This project demonstrates a Behavior-Driven Development (BDD) testing framework using Webdriver.io with TypeScript and Cucumber. The tests are designed to validate functionalities of the https://www.saucedemo.com website. Allure Reporter is integrated for generating detailed test reports.

## Project Structure

QA_Test_Project/
│
├── test/
│ ├── features/ # Cucumber feature files
│ │ ├── login.feature
│ │ ├── productList.feature
│ │ ├── addToCart.feature
│ │ ├── checkout.feature
│ │ └── logout.feature
│ │
│ ├── step-definitions/ # Step definition files for Cucumber
│ │ ├── login.steps.ts
│ │ ├── productList.steps.ts
│ │ ├── addToCart.steps.ts
│ │ ├── checkout.steps.ts
│ │ └── logout.steps.ts
│ │
│ └── support/ # Config files and support scripts
│ ├── hooks.ts
│ └── report.ts
│
├── wdio.conf.mjs # Webdriver.io configuration file
├── package.json
├── tsconfig.json
└── README.md

## Setup Instructions

1. **Clone Repository:**
   ```bash
   git clone <repository_url>
   cd QA_Test_Project

2. **Install Dependencies:**
    npm install

3. **Configure Webdriver.io:**
    Modify 'wdio.conf.mjs' to customize test 
    configurations
    Udpate 'tsconfig.json' if needed for TypeScript settings

## Running Tests

1. **Run Tests:**
To run the tests, execute the following command:
npx wdio wdio.conf.mjs

## Viewing Reports

1. **Generate Allure Report:**
    After running tests, generate the Allure report:

    npx allure generate --clean

2. **Open Allure Report:**
    View the generated report in the browser:

    npx allure open

## Test Scenarios
1. **Login Test:**
    Verify successful and unsuccessful login attempts.

2. **Product List Test:**
    Verify products are listed correctly after login.

3. **Add to Cart Test :**
    Test adding an item to the shopping cart.

4. **Checkout Process Test:**
    Test the entire checkout process from adding an item to completing the purchase.

5. **Logout Test:**
    Ensure the logout functionality works correctly.

## Test Design Approach

1. **Folder Structure:**

    features/: Contains Cucumber feature files describing test scenarios.
    step-definitions/: Contains TypeScript files defining step implementations.
    support/: Contains support scripts (hooks, report configuration).

2. **Cucumber Configuration:**

    Cucumber is used for writing BDD-style test scenarios (Given, When, Then).
    Step definitions map Gherkin steps to JavaScript/TypeScript code.

3. **Allure Reporter:**

    Integrated Allure Reporter for generating detailed test reports.
    Reports include test results, error captures, and screenshots.