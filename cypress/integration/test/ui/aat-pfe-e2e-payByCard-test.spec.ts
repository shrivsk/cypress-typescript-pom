/// <reference types="cypress" />
// ***********************************************
import { pfeAdulteryWithCost } from '../../pageObjects/adulteryCase/pfeAdulteryWithCost'
import { pfeAdulteryWithoutCost } from '../../pageObjects/adulteryCase/pfeAdulteryWithoutCost'
import { pfeAdulteryCostPayCard } from '../../pageObjects/adulteryCase/pfeAdulteryCostPayCard'
import { exuiLoginPage } from '../../pageObjects/exuiPages/loginPage'
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let pfeCaseId: { ccdAatCaseId: string }
const login = new pfeLoginPage()
const pfeAdWithCost = new pfeAdulteryWithCost()
const pfeAdWithoutCost = new pfeAdulteryWithoutCost()
const pfeAdulteryPayCard = new pfeAdulteryCostPayCard()
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
  //   pfeAdulteryPayCard.adulteryCaseCostPaybyCard()
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



  it('Successfully create basic Adultery case using PFE without Cost', async () => {
    login.pfeDemologin()
    pfeAdulteryPayCard.adulteryCaseCostPaybyCard()
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
