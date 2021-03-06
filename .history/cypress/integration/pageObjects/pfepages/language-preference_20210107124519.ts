/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class languagePreference {

  snglishOnly() {
    const selectEnglish = cy.get('#languagePreferenceWelsh_No')
    selectEnglish.click()
    return this
  }
  selectEnglishandWelsh() {
    const selectEnglishandWelsh = cy.get('#languagePreferenceWelsh_Yes')
    selectEnglishandWelsh.click()
    return this
  }

  clickContinueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
}
export default languagePreference