/* /// <reference path="../steps.d.ts" /> */
/// <reference types="cypress" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Create all tyupe of BA scenarios using API');

Scenario('div-BA-2-year-separation-with-consent', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-2-year-separation-with-consent.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});