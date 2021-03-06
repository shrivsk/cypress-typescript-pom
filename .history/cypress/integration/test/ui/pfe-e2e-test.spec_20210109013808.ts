/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import {ccdLoginPage} from '../../pageObjects/loginPage/ccdLoginPage'
// ***********************************************
let caseId:Number
const pbasic = new pfeAdulteryCase()
const ccdLoginPg = new ccdLoginPage()
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  before(function(){
    cy.fixture('pfe_CaseId').then(function(data){
      this.caseId=data
    })
  })

  

  it('Successfully create basic Adultery case using PFE', () => {
    // pbasic.basicAdulteryCase()
    // const ccdCaseId=cy.get('@pfeCaseId')
    // cy.log('caseid from PFE:----->'+`${ccdCaseId}`)
    cy.log(this.caseId)
    ccdLoginPg.openCcdAatUrl()
    ccdLoginPg.enterCcdBetaUserID()
    ccdLoginPg.enterPassword()
    ccdLoginPg.clickSubmitButton()
    cy.visit(`${Cypress.env("ccdAatUrl")}`+'/case-details/'+this.caseId)
    cy.reload(true)
  })
})
