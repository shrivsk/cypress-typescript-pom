/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglishOnly() {
    const selectEnglish = cy.get('#languagePreferenceWelsh_No')
    selectEnglish.click()
    return this
  }
  selectEnglishandWelsh() {
    const selectEnglishandWelsh = cy.get('#languagePreferenceWelsh_No')
    selectEnglishandWelsh.click()
    return this
  }

  clickContinueButton() {
    const Continuebtn = cy.get('.button')
    Continuebtn.click()
    return this
  }
}
export default languagePreference