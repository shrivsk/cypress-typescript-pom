/// <reference types="cypress" />
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
    });


    Cypress.Commands.add("createCase", (testEmail, apiCreateUserUrl) => {
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
      });



    async function createCaseAndFetchResponse(dataLocation = 'data/ccd-basic-data.json') {

        const authToken = await getUserToken();
      
        const userId = await getUserId(authToken);
      
        const serviceToken = await getServiceToken();
      
        logger.info('Creating Case');
      
        const ccdApiUrl = `http://ccd-data-store-api-${env}.service.core-compute-${env}.internal`;
        const ccdStartCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/event-triggers/hwfCreate/token`;
        const ccdSaveCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases`;
      
        const startCaseOptions = {
          method: 'GET',
          uri: ccdApiUrl + ccdStartCasePath,
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'ServiceAuthorization': `Bearer ${serviceToken}`,
            'Content-Type': 'application/json'
          }
        };
      
        const startCaseResponse = await request(startCaseOptions);
        console.log(startCaseResponse);
      
        const eventToken = JSON.parse(startCaseResponse).token;
      
        var data = fs.readFileSync(dataLocation);
        var saveBody = {
          data: JSON.parse(data),
          event: {
            id: 'hwfCreate',
            summary: 'Creating Case',
            description: 'For CCD E2E Test'
          },
          'event_token': eventToken
        };
      
        const saveCaseOptions = {
          method: 'POST',
          uri: ccdApiUrl + ccdSaveCasePath,
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'ServiceAuthorization': `Bearer ${serviceToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(saveBody)
        };
      
        const saveCaseResponse =  await request(saveCaseOptions);
        return saveCaseResponse;
      }