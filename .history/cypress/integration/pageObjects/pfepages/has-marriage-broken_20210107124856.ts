/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class hasMarriageBroken {

  HasMarriageBroken_Yes() {
    const HasMarriageBroken_Yes = cy.get('#screenHasMarriageBroken_Yes')
    HasMarriageBroken_Yes.click()
    return this
  }
  englishandWelsh() {
    const selectEnglishandWelsh = cy.get('#languagePreferenceWelsh_Yes')
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