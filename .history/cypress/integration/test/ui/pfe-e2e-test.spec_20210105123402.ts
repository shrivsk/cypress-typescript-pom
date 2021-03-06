/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'
import "../../../support/commands"
// ***********************************************
let ccdCaseId

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  const ccdLoginPg = new ccdLoginPage()
  

  it.only('Successfully create basic Adultery case using PFE', async () => {
    ccdCaseId = pbasic.basicAdulteryCase()
    cy.log('caseid from PFE:-----')
    ccdLoginPg.openCcdUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+ccdCaseId)
  })
  // it('Successfully create basic Adultery case using PFE', () => {
  //   pbasic.basicAdulteryCase()
  //   ccdLoginPg.openCcdUrl()
  //   ccdLoginPg.enterCcdBetaUserID()
  //   ccdLoginPg.enterPassword()
  //   ccdLoginPg.clickSubmitButton()
  //   cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+caseidccdLoginPg.openCcdUrl()
  //   ccdLoginPg.enterCcdBetaUserID()
  //   ccdLoginPg.enterPassword()
  //   ccdLoginPg.clickSubmitButton()
  //   cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+caseid))
  // })
})
