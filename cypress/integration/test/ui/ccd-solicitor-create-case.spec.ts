/// <reference types="cypress" />
// ***********************************************
import { exuiLoginPage } from '../../pageObjects/exuiPages/loginPage'
import "../../../support/commands"
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const exuiLoginPg = new exuiLoginPage()

  it('Successfully create basic Adultery case using CCD Solicitor', async () => {
    exuiLoginPg.openCcdAatUrl()
    exuiLoginPg.enterCcdSolicitorUserID()
    exuiLoginPg.enterPassword()
    exuiLoginPg.clickSubmitButton()
    cy.get(':nth-child(2) > .hmcts-primary-navigation__link').click()
    cy.wait(5)
    cy.get('#cc-jurisdiction').select('Family Divorce')
    cy.get('#cc-case-type').select('Divorce case - v115.00')
    cy.get('#cc-event').select('Apply for a divorce')
    cy.get('.button').click()
  })
})
