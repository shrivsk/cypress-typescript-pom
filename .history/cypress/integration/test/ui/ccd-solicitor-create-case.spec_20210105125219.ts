/// <reference types="cypress" />
// ***********************************************
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'
import "../../../support/commands"
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  
  it.only('Successfully create basic Adultery case using CCD Solicitor', async () => {
    cy.log('caseid from PFE:----->'+ccdCaseId)
    ccdLoginPg.openCcdUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+ccdCaseId)
  })
})
