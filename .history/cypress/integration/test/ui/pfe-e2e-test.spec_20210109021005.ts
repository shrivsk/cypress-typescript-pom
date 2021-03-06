/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {ccdLoginPage} from '../../pageObjects/loginPage/ccdLoginPage'
// ***********************************************
// let caseId:Number
const pbasic = new pfeAdulteryCase()
const ccdLoginPg = new ccdLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  let pfecaseid: { ccdCaseId: string }
  beforeEach(function(){
    cy.fixture('pfe_CaseId').then((data)=>{
      pfeaseid = data
    })
  })

  it('Successfully create basic Adultery case using PFE', async () => {
    pbasic.basicAdulteryCase()
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+pfecaseid.ccdCaseId)
    cy.reload(true)  
  })
})
