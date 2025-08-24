npm init -y
npm install playwright @playwright/test
npx playwright install  
npm install typescript ts-node --save-dev
npm install dotenv@16.5.0

to run test script
npx playwright test

to run a specific test
npx playwright test -g "Login to Foodhaven using Email"

to run a specific group of test
npx playwright test --grep "Auth"