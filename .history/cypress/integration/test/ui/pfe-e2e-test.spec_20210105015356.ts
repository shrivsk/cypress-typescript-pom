/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'
import "../../../support/commands"
// ***********************************************
const emailName = `pfe_test_${Cypress._.random(0, 999999)}`;
let testEmail = `${emailName}@mailinator.com`;
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  const ccdLoginPg = new ccdLoginPage()
  

  it.only('Successfully create basic Adultery case using PFE', () => {
    // pbasic.basicAdulteryCase()
    const abc ='1609 ‐ 8115 ‐ 4695 ‐ 8102'
    cy.log()
  })
  // it('Successfully create basic Adultery case using PFE', () => {
  //   pbasic.basicAdulteryCase()
  //   ccdLoginPg.openCcdUrl()
  //   ccdLoginPg.enterCcdBetaUserID()
  //   ccdLoginPg.enterPassword()
  //   ccdLoginPg.clickSubmitButton()
  //   cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+pbasic.caseid)
  // })
})
