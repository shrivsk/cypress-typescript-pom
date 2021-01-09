/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {ccdLoginPage} from '../../pageObjects/loginPage/ccdLoginPage'
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  const ccdLoginPg = new ccdLoginPage()
   ccdCaseId: string | Promise<string>

  it('Successfully create basic Adultery case using PFE', async () => {
    ccdCaseId = pbasic.basicAdulteryCase()
    // ccdCaseId='1609984776924704'
    cy.log('caseid from PFE:----->'+ccdCaseId)
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${ccdCaseId}`)
    cy.reload(true)
    cy.url().should('eq', `${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${ccdCaseId}`) 
  })
})
