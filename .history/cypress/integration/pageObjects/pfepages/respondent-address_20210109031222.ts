/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class respondentAddress {

  respondentAddress_Yes() {
    const respondentAddress_Yes = cy.get('#screenHasRespondentAddress_Yes')
    respondentAddress_Yes.click()
    return this
  }
  respondentAddress_No() {
    const respondentAddress_No = cy.get('#screenHasRespondentAddress_No')
    respondentAddress_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  respondentAddress_Yes() 
}
export default respondentAddress