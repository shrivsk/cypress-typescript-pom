// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by createIdamUser attribute.
     * @example cy.createIdamUser('testEmail','apiCreateUserUrl')
    */
   createIdamUser(testEmail: string, apiCreateUserUrl: string): Chainable<Element>
  }
}