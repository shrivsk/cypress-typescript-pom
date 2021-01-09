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
  let pfecaseid
  before(function(){
    cy.fixture('pfe_CaseId').then((data)=|>{
      pfecaseid=data
    })
  })

  

  it('Successfully create basic Adultery case using PFE', async () => {
    // pbasic.basicAdulteryCase()
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.fixture('pfe_CaseId').then((data)=>{
      cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+data.caseid)
      cy.reload(true)
    })   
  })
})
