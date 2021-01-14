/// <reference types="cypress" />
// ***********************************************
import { pfeAdulteryCase } from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { exuiLoginPage } from '../../pageObjects/exuiPages/loginPage'
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let pfeCaseId: { ccdAatCaseId: string }
const login = new pfeLoginPage()
const pbasic = new pfeAdulteryCase()
const exuiLoginPg = new exuiLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {

  // beforeEach(function(){
  //   cy.fixture('pfe_CaseId').then((data)=>{
  //     pfeCaseId = data
  //   })
  // })

  it('Successfully create basic Adultery case using PFE', async () => {
    login.pfeAatlogin()
    pbasic.basicAdulteryCase()
    exuiLoginPg.openCcdAatUrl()
    exuiLoginPg.enterCcdBetaUserID()
    exuiLoginPg.enterPassword()
    exuiLoginPg.clickSubmitButton()
    cy.fixture('pfe_CaseId').then((data) => {
      cy.log('##########[' + data.ccdAatCaseId + ']##########')
      cy.visit(`${Cypress.env("ccdAatUrl")}` + '/case-details/' + data.ccdAatCaseId)
      cy.reload(true)
    })
  })
})
