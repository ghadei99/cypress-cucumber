const { defineConfig } = require('cypress');
const { default: preprocessor } = require('cypress-cucumber-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber());
    },
  specPattern: '**/*.feature',
  supportFile: false,
},
hideXHR:true,
})