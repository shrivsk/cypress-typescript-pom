/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglishOnly() {
    const selectEnglish = cy.get('.button')
    Continuebtn.click()
    return this
  }
  selectEnglishandWelsh() {
    const selectEnglish = cy.get('.button')
    Continuebtn.click()
    return this
  }

  clickContinueButton() {
    const Continuebtn = cy.get('.button')
    Continuebtn.click()
    return this
  }
}
export default languagePreference