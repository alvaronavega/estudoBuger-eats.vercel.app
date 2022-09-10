const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '18fqu2',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://buger-eats-qa.vercel.app',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
