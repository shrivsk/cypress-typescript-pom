/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {ccdLoginPage} from '../../pageObjects/loginPage/ccdLoginPage'
// ***********************************************
let ccdCaseId
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  const ccdLoginPg = new ccdLoginPage()
  

  it('Successfully create basic Adultery case using PFE', async () => {
    ccdCaseId = pbasic.basicAdulteryCase()
    cy.log('caseid from PFE:----->'+ccdCaseId)
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${ccdCaseId}`)
    
    cy.url().should('include', '/case-details/'+`${ccdCaseId}`) // => true
    cy.url().should('eq', `${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${ccdCaseId}`) 
  })
})
