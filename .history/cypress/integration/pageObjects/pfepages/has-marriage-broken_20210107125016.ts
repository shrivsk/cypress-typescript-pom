/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class hasMarriageBroken {

  HasMarriageBroken_Yes() {
    const marriageBroken_Yes = cy.get('#screenHasMarriageBroken_Yes')
    marriageBroken_Yes.click()
    return this
  }
  screenHasMarriageBroken_No() {
    const marriageBroken_No = cy.get('#screenHasMarriageBroken_No')
    screenHasMarriageBroken_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
}
export default hasMarriageBroken