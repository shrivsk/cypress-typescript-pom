/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class financialRemedy {

  marriageCert_Yes() {
    const marriageCert_Yes = cy.get('#screenHasMarriageCert_Yes')
    marriageCert_Yes.click()
    return this
  }
  marriageCert_No() {
    const marriageCert_No = cy.get('#screenHasMarriageCert_No')
    marriageCert_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
}
export default marriageCertificate