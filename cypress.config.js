// cypress.config.js

const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
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
    URL: "http://localhost:8888/index.php?action=index&module=Home", // for vTiger
    EcomURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
});
