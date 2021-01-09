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
    pbasic.basicAdulteryCase()
    const ccdCaseId=cy.get('@pfeCaseId')
    cy.log('caseid from PFE:----->'+`${ccdCaseId}`)
    const pfeccdCaseID= cy.readFile('cypress/fixtures/pfe_CaseId.txt').createIdamUser()
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${pfeccdCaseID}`)
    cy.reload(true)
    cy.url().should('eq', `${Cypress.env("ccdAatUrl")}`+'/case-details/'+`${ccdCaseId}`) 
  })
})
