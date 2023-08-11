# playwright-exercise

## Test to do

Use Node.js, Typescript, and the Playwright library. IMPORTANT: Playwright should be used to facilitate the web automation, not for testing purposes.
Navigate to https://amazon.com
Finds the three lowest prices for any given search term
Write these products' to a CSV locally where each row contains product, price, search term, and link to the product's page.
The design should be generalized enough so that the framework can be applied to another e-commerce site with relative ease and minimal re-work.
Should utilize Typescript features where helpful.
Should run successfully during the review session.
Focus on maintainability and scalability.

## Node packages

Node >=14
Playwright
Cucumber

## Usage

`npm install`

`npx playwright install`

`npm run test --featureName=amazon.feature`

## Browser

Browser hardcoded to chrome.
