/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class hasMarriageBroken {

  screenHasMarriageBroken_Yes() {
    const marriageBroken_Yes = cy.get('#screenHasMarriageBroken_Yes')
    marriageBroken_Yes.click()
    return this
  }
  screenHasMarriageBroken_No() {
    const marriageBroken_No = cy.get('#screenHasMarriageBroken_No')
    marriageBroken_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  marriageBroken_Yes() {
    this.screenHasMarriageBroken_Yes
    
  }
  marriageBroken_No() {

  }
}
export default hasMarriageBroken