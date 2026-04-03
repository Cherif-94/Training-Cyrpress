const { defineConfig } = require('cypress');

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mo_rapport de test Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // baseUrl: 'https://qacart-todo.herokuapp.com/',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    failCypressOnDiff: false
  },
});


require('@applitools/eyes-cypress')(module);
