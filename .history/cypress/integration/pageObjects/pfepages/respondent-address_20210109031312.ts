/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class respondentAddress {

  screenHasRespondentAddress_Yes() {
    const respondentAddress_Yes = cy.get('#screenHasRespondentAddress_Yes')
    respondentAddress_Yes.click()
    return this
  }
  screenHasRespondentAddress_No() {
    const respondentAddress_No = cy.get('#screenHasRespondentAddress_No')
    respondentAddress_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  respondentAddress_Yes(){
this.screenHasRespondentAddress_Yes()
this.continueButton()
  } 
  respondentAddress_No(){
this.
  }
}
export default respondentAddress