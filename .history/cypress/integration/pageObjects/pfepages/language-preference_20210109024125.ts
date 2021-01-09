/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class languagePreference {

  languagePreferenceWelsh_No() {
    const selectEnglish = cy.get('#languagePreferenceWelsh_No')
    selectEnglish.click()
    return this
  }
  languagePreferenceWelsh_Yes() {
    const selectEnglishandWelsh = cy.get('#languagePreferenceWelsh_Yes')
    selectEnglishandWelsh.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  preferenceEnglish() {
this.
  }  
  preferenceWelsh() {

  }
}
export default languagePreference