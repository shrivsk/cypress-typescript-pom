/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class marriageCertificate {

  MarriageCert_Yes() {
    const selectEnglish = cy.get('#screenHasMarriageCert_Yes')
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
export default marriageCertificate