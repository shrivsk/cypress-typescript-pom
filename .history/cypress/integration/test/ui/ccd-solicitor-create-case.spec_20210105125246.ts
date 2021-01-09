/// <reference types="cypress" />
// ***********************************************
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'
import "../../../support/commands"
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const ccdLoginPg = new ccdLoginPage()
  it.only('Successfully create basic Adultery case using CCD Solicitor', async () => {

    ccdLoginPg.openCcdUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+ccdCaseId)
  })
})
