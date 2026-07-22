const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    defaultCommandTimeout: 60000,
    viewportHeight: 960,
    viewportWidth: 1530,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
