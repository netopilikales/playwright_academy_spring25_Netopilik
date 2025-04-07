// first_tests.spec.ts

import { test } from "@playwright/test";

test("prvni test", async ({ page }) => {
  // testovací kroky
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_academy");
  await page.locator("#password").fill("Playwright321!");
  await page.locator(".btn").click();
});
