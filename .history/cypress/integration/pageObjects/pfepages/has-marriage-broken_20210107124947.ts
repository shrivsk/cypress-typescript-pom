/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class hasMarriageBroken {

  HasMarriageBroken_Yes() {
    const marriageBroken_Yes = cy.get('#screenHasMarriageBroken_Yes')
    marriageBroken_Yes.click()
    return this
  }
  englishandWelsh() {
    const selectEnglishandWelsh = cy.get('#screenHasMarriageBroken_No')
    selectEnglishandWelsh.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
}
export default hasMarriageBroken