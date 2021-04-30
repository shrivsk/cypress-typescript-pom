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
  return cy.log(`${testEmail}`);
});

Cypress.Commands.add("login", (url) => {
  cy.request({
    method: "POST",
    url: `https://login.microsoftonline.com/${Cypress.env("tenantId")}/oauth2/token`,
    form: true,
    body: {
      grant_type: "client_credentials",
      client_id: Cypress.env("clientId"),
      client_secret: Cypress.env("clientSecret"),
    },
  }).then(response => {
    const ADALToken = response.body.access_token;
    const expiresOn = response.body.expires_on;

    localStorage.setItem("adal.token.keys", `${Cypress.env("clientId")}|`);
    localStorage.setItem(`adal.access.token.key${Cypress.env("clientId")}`, ADALToken);
    localStorage.setItem(`adal.expiration.key${Cypress.env("clientId")}`, expiresOn);
    localStorage.setItem("adal.idtoken", ADALToken);
  });
});