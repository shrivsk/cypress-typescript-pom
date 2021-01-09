/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class marriageCertificate {

  marriageCert_Yes() {
    const marriageCert_Yes = cy.get('#screenHasMarriageCert_Yes')
    marriageCert_Yes.click()
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