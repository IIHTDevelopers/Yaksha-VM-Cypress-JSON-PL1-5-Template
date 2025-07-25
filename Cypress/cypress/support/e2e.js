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

// Import custom commands defined in commands.js
import './commands'; // This file contains custom commands that can be reused in tests

// Import the Cypress XPath plugin to enable XPath selectors in tests
import 'cypress-xpath'; // This allows the use of XPath syntax for element selection

// Import the Mochawesome reporter for generating test reports
import 'cypress-mochawesome-reporter/register'; // This registers the Mochawesome reporter for test output

import 'cypress-wait-until';