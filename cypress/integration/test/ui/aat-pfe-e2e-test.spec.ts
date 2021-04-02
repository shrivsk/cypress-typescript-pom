/// <reference types="cypress" />
// ***********************************************
import { pfeAdulteryWithCost } from '../../pageObjects/adulteryCase/pfeAdulteryWithCost'
import { pfeAdulteryWithoutCost } from '../../pageObjects/adulteryCase/pfeAdulteryWithoutCost'
import { exuiLoginPage } from '../../pageObjects/exuiPages/loginPage'
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let pfeCaseId: { ccdAatCaseId: string }
const login = new pfeLoginPage()
const pfeAdWithCost = new pfeAdulteryWithCost()
const pfeAdWithoutCost = new pfeAdulteryWithoutCost()
const exuiLoginPg = new exuiLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE With Cost', () => {

  // beforeEach(function(){
  //   cy.fixture('pfe_CaseId').then((data)=>{
  //     pfeCaseId = data
  //   })
  // })

  // it.only('Successfully create basic Adultery case using PFE with Cost', async () => {
  //   login.pfeAatlogin()
  //   pfeAdWithCost.basicAdulteryCase()
  //   exuiLoginPg.openCcdAatUrl()
  //   exuiLoginPg.enterCcdBetaUserID()
  //   exuiLoginPg.enterPassword()
  //   exuiLoginPg.clickSubmitButton()
  //   cy.fixture('pfe_CaseId').then((data) => {
  //     cy.log('##########[' + data.ccdAatCaseId + ']##########')
  //     cy.visit(`${Cypress.env("ccdAatUrl")}` + '/case-details/' + data.ccdAatCaseId)
  //     cy.reload(true)
  //   })
  // })
  // })

  // // describe('Successfully create Adultery case using PFE Without Cost', () => {
  it('Successfully create basic Adultery case using PFE without Cost', async () => {
    login.pfeAatlogin()
    pfeAdWithCost.basicAdulteryCaseWithCost()
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
