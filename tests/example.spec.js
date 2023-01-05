// @ts-check

const { test, expect, chromium } = require('@playwright/test');
import path from "path";
test('ex-1', async () => {
  // Launch a browser instance
  const browser = await chromium.launch();
  // Create a new page
  const page = await browser.newPage();
  // Navigate to the page with the HTML and CSS you want to test
  const currentPath = path.join(process.cwd(), 'ex-1-pricing-grid/index.html');
  const url = "file:///" + currentPath;
  await page.goto(url);
  // Compare the screenshot to a reference image
  await expect(page).toHaveScreenshot('ex-1-result.png');
  // Close the browser
  await browser.close();
});

