const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //baseUrl: "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
   // "viewportHeight": 375,
    //"viewportWidth": 667,
    //"retries": {openMode:3,runMode: 1}, //open mode  test run  runmode=comm
    env:{
"username":"Admin",
"password":"admin123",
"loginUrl":"https://opensource-demo.orangehrmlive.com",
    },
    "video":true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
