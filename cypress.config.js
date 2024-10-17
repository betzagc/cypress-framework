
module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  //variables de entorno
  env:
  {
     url:'https://www.demoblaze.com/'
  },
  //para reintento si falla un casos
 // retries: 1,
  e2e: {
    experimentalStudio:true,
    chromeWebSecurity:false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};
