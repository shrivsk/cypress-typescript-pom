/// <reference types="cypress" />
// const { Logger } = require('@hmcts/nodejs-logging');
const requestModule = require('request-promise-native');
const request = requestModule.defaults({ 'proxy': 'http://proxyout.reform.hmcts.net:8080' });
// const request = requestModule.defaults();
const fs = require('fs');

const logger = cy.log(getLogger('helpers/utils.js');

const env = process.env.RUNNING_ENV || 'aat';
const months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getSolicitorLoginDetails = () => {
  if (!process.env.CCD_E2E_PASSWORD) {
    throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
  }
  return {
    username: process.env.CCD_E2E_EMAIL,
    password: process.env.CCD_E2E_PASSWORD
  };
};

const getCaseWorkerLoginDetails = () => {
  if (!process.env.CCD_E2E_PASSWORD) {
    throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
  }
  return {
    username: process.env.CCD_CASEWORKER_E2E_EMAIL,
    password: process.env.CCD_CASEWORKER_E2E_PASSWORD
  };
};

async function getUserToken() {
  logger.info('Getting User Token');

  // Setup Details
  const username = process.env.CCD_CASEWORKER_E2E_EMAIL;
  const password = process.env.CCD_CASEWORKER_E2E_PASSWORD;
  const redirectUri = `https://div-pfe-${env}.service.core-compute-${env}.internal/authenticated`;
  const idamClientSecret = process.env.IDAM_CLIENT_SECRET;

  const idamBaseUrl = 'https://idam-api.aat.platform.hmcts.net';

  const idamCodePath = `/oauth2/authorize?response_type=code&client_id=divorce&redirect_uri=${redirectUri}`;

  const codeResponse = await request.post({
    uri: idamBaseUrl + idamCodePath,
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch(error => {
    console.log(error);
  });

  const code = JSON.parse(codeResponse).code;

  const idamAuthPath = `/oauth2/token?grant_type=authorization_code&client_id=divorce&client_secret=${idamClientSecret}&redirect_uri=${redirectUri}&code=${code}`;
  const authTokenResponse = await request.post({
    uri: idamBaseUrl + idamAuthPath,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  logger.debug(JSON.parse(authTokenResponse)['access_token']);

  return JSON.parse(authTokenResponse)['access_token'];
}

async function getUserId(authToken) {
  logger.info('Getting User Id');

  const idamBaseUrl = 'https://idam-api.aat.platform.hmcts.net';

  const idamDetailsPath = '/details';
  const userDetails = await request.get({
    uri: idamBaseUrl + idamDetailsPath,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });

  logger.debug(JSON.parse(userDetails).id);

  return JSON.parse(userDetails).id;
}

async function getServiceToken() {
  logger.info('Getting Service Token');

  const serviceSecret = process.env.SERVICE_SECRET;

  const s2sBaseUrl = `http://rpe-service-auth-provider-${env}.service.core-compute-${env}.internal`;
  const s2sAuthPath = '/lease';
  const oneTimePassword = require('otp')({
    secret: serviceSecret
  }).totp();

  const serviceToken = await request({
    method: 'POST',
    uri: s2sBaseUrl + s2sAuthPath,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      microservice: 'divorce_ccd_submission',
      oneTimePassword
    })
  });

  logger.debug(serviceToken);

  return serviceToken;
}

async function createCaseInCcd(dataLocation = 'data/ccd-basic-data.json') {
  const saveCaseResponse = await createCaseAndFetchResponse(dataLocation).catch(error => {
    console.log(error);
  });
  const caseId = JSON.parse(saveCaseResponse).id;
  logger.info('Created case with id %s', caseId);
  return caseId;
}

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

async function updateCaseInCcd(caseId, eventId, dataLocation = 'data/ccd-update-data.json') {

  const authToken = await getUserToken();

  const userId = await getUserId(authToken);

  const serviceToken = await getServiceToken();

  logger.info('Updating case with id %s and event %s', caseId, eventId);

  const ccdApiUrl = `http://ccd-data-store-api-${env}.service.core-compute-${env}.internal`;
  const ccdStartEventPath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases/${caseId}/event-triggers/${eventId}/token`;
  const ccdSaveEventPath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases/${caseId}/events`;

  const startEventOptions = {
    method: 'GET',
    uri: ccdApiUrl + ccdStartEventPath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    }
  };

  const startEventResponse = await request(startEventOptions);

  const eventToken = JSON.parse(startEventResponse).token;

  var data = fs.readFileSync(dataLocation);
  var saveBody = {
    data: JSON.parse(data),
    event: {
      id: eventId,
      summary: 'Updating Case',
      description: 'For CCD E2E Test'
    },
    'event_token': eventToken
  };

  const saveEventOptions = {
    method: 'POST',
    uri: ccdApiUrl + ccdSaveEventPath,
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'ServiceAuthorization': `Bearer ${serviceToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(saveBody)
  };

  const saveEventResponse = await request(saveEventOptions);

  return saveEventResponse;
}
const getBaseUrl = () => {
  return 'manage-case.aat.platform.hmcts.net';
};

function firstLetterToCaps(value){
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

function datechange(numberOfDaysToAdd){
  let currentDateTime = new Date();
  let newDate = new Date();
  newDate = new Date(newDate.setDate(currentDateTime.getDate()+numberOfDaysToAdd));
  let formattedDate = newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear();
  return formattedDate;
};

function formatDateToCcdDisplayDate(givenDate = new Date()) {
  let formattedDate = givenDate.getDate() + ' ' + months[givenDate.getMonth()] + ' ' + givenDate.getFullYear();
  return formattedDate;
};

module.exports = {
  getSolicitorLoginDetails,
  getCaseWorkerLoginDetails,
  createCaseInCcd,
  createCaseAndFetchResponse,
  updateCaseInCcd,
  getBaseUrl,
  datechange,
  formatDateToCcdDisplayDate,
  firstLetterToCaps
};
