// / <reference types="cypress" />
// ***********************************************
Cypress.Commands.add("createIdamUser", (testEmail, apiCreateUserUrl) => {
    cy.log(`"Before API request email :--> ("${testEmail}")"`);
    cy.request(
      'POST',
      `${apiCreateUserUrl}`,
      {
        'email': `${testEmail}`,
        'forename': 'PFE TEST',
        'surname': 'TEST',
        'password': `${Cypress.env("password")}`,
        'roles': [{
          'code': 'citizen'
        }]
      }).then((response) => {
      expect(response.status).to.eq(201);
    });
    cy.log(`"After AIP POST request email :--> ("${testEmail}")"`);
    return cy.log(test`Email)
    });
