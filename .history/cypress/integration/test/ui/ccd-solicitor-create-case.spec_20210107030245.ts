/// <reference types="cypress" />
// ***********************************************
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'
import "../../../support/commands"
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const ccdLoginPg = new ccdLoginPage()

  it.only('Successfully create basic Adultery case using CCD Solicitor', async () => {
    cy.log(ccdLoginPage)
    // ccdLoginPg.openCcdAatUrl()
    // ccdLoginPg.enterCcdSolicitorUserID()
    // ccdLoginPg.enterPassword()
    // ccdLoginPg.clickSubmitButton()
    // cy.get(':nth-child(2) > .hmcts-primary-navigation__link').click()
    // cy.wait(5)
    // cy.get('#cc-jurisdiction').select('Family Divorce')
    // cy.get('#cc-case-type').select('Divorce case - v115.00')
    // cy.get('#cc-event').select('Apply for a divorce')
    // cy.get('.button').click()
  })
})
