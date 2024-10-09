import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 120000,
  workers: 1,
  maxFailures: 1000,
  reporter: [["list"], ["html", {outputDir: "test-results"}]],
  projects: [
    {
      name: "e2e",
      use: {
        headless: true,
        browserName: "chromium",
        ignoreHTTPSErrors: true,
        viewport: {"width": 1650, "height": 1020},
        video: "retain-on-failure",
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        baseURL: "http://localhost:5130/",
      }
    },
  ],
  retries: 0,
};
export default config;
