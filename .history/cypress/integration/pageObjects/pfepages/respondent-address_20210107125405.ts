/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class respondentAddress {

  respondentAddress_Yes() {
    const screenHasRespondentAddress_Yes = cy.get('#screenHasRespondentAddress_Yes')
    screenHasRespondentAddress_Yes.click()
    return this
  }
  respondentAddress_No() {
    const marriageBroken_No = cy.get('#screenHasMarriageBroken_No')
    marriageBroken_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
}
export default respondentAddress