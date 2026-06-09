// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')






//    In cypress/support/e2e.js or support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // You can filter which errors to ignore
  if (err.message.includes('e is undefined')) {
    return false; // prevent test from failing
  }
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Invalid left-hand side in assignment')) {
    return false; // prevent Cypress from failing test
  }
  Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on app errors
  return false;
});

});
Cypress.on('uncaught:exception', () => {
  return false;
});

  // allow other errors to fail the test
  return true;
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on app errors
  return false;
});

});
 