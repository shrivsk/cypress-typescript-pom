/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class has-marriage-broken {

  englishOnly() {
    const selectEnglish = cy.get('#languagePreferenceWelsh_No')
    selectEnglish.click()
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
export default languagePreference