// cypress.config.js

const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  projectId: "yk4c2q",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  videoCompression: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login", // Note: 'baseUrl', not 'baseURL'
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            // fs.unlinkSync(results.video)
          }
        }
      })
    },
  },
  
  env: {
    Url: "https://naveenautomationlabs.com/opencart/index.php?route=account/login", // for vTiger
    EcomUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
});
