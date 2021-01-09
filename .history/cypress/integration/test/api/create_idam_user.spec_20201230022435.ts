/// <reference types="cypress" />
// ***********************************************
const apiCreateUserUrl = `${Cypress.env("apiTestingSupportUrl")}`;
const emailName = `pfe_test_${Cypress._.random(0, 99999)}`;
let testEmail = `${emailName}@mailinator.com`;
// ***********************************************
describe.skip('Crearte User with API', () => {
  it('successfully create IDAM User using API', function () {
    cy.log(`"Before API request user email ID :--> ("${testEmail}")"`);
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
    cy.log(`"After AIP request email :--> ("${testEmail}")"`);
  })
})