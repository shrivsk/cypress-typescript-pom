/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class marriageCertificate {

  screenHasMarriageCert_Yes() {
    const marriageCert_Yes = cy.get('#screenHasMarriageCert_Yes')
    marriageCert_Yes.click()
    return this
  }
  screenHasMarriageCert_No() {
    const marriageCert_No = cy.get('#screenHasMarriageCert_No')
    marriageCert_No.click()
    return this
  }

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  marriageCert_Yes(){
    this.screenHasMarriageCert_Yes()
    this.continueButton()
  }
  marriageCert_No(){
this.screenHasMarriageCert_No()
this.continueButton()
  }
}
export default marriageCertificate