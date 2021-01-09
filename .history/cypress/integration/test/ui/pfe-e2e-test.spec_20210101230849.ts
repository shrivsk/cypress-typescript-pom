/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  const ccdLoginPg = new ccdLoginPage()
  

  it('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
  })
  it.only('Successfully create basic Adultery case using PFE', () => {
    // pbasic.basicAdulteryCase()
    // ccdLoginPg.openCcdUrl()
    // ccdLoginPg.enterCcdBetaUserID()
    // ccdLoginPg.enterPassword()
    // ccdLoginPg.clickSubmitButton()
    const caseidtxt = ('1877 - 3333 - 2223 - 9999 ').replace(' - ')
    caseidtxt.replace(' - ','');

    cy.visit('https://www-ccd.aat.platform.hmcts.net/v2/case/'+caseidtxt)
  })
})
