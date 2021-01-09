/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {ccdLoginPage} from '../../pageObjects/exui/ccdLoginPage'
// ***********************************************
let pfeCaseId: { ccdCaseId: string }
const pbasic = new pfeAdulteryCase()
const ccdLoginPg = new ccdLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {

  beforeEach(function(){
    cy.fixture('pfe_CaseId').then((data)=>{
      pfeCaseId = data
    })
  })

  it('Successfully create basic Adultery case using PFE', async () => {
    pbasic.basicAdulteryCase()
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.log('##########['+pfeCaseId.ccdCaseId+']##########')
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+pfeCaseId.ccdCaseId)
    cy.reload(true)  
  })
})
