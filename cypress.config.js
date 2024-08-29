const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //create a new global environment object [if it's withing e2e block that becomes local config]
  env: {
    URL: "http://localhost:8888/index.php?action=index&module=Home"
  }
});
