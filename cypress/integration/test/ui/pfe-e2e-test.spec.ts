/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {exuiLoginPage} from '../../pageObjects/exuiPages/loginPage'
// ***********************************************
let pfeCaseId: { ccdAatCaseId: string }
const pbasic = new pfeAdulteryCase()
const exuiLoginPg = new exuiLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {

  beforeEach(function(){
    cy.fixture('pfe_CaseId').then((data)=>{
      pfeCaseId = data
    })
  })

  it.only('Successfully create basic Adultery case using PFE', async () => {
    pbasic.basicAdulteryCase()
    // exuiLoginPg.openCcdAatUrl()
    // exuiLoginPg.enterCcdBetaUserID()
    // exuiLoginPg.enterPassword()
    // exuiLoginPg.clickSubmitButton()
    // cy.log('##########['+pfeCaseId.ccdAatCaseId+']##########')
    // cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+pfeCaseId.ccdAatCaseId)
    // cy.reload(true)  
  })
})
