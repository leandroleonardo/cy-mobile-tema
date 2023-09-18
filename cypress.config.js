const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app-11-225-50934.ide.cronapp.io/mobileapp/#/app",
    testIsolation: false,
    "viewportHeight": 520,
    "viewportWidth": 368,
    setupNodeEvents(on, config) {
    },
  },
});