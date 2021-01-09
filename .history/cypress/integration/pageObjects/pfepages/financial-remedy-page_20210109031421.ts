/// <reference types="cypress" />
// ***********************************************

// ***********************************************
export class financialRemedy_page {

  continueButton() {
    const Continuebtn = cy.get('.govuk-button')
    Continuebtn.click()
    return this
  }
  submitFinancial
}
export default financialRemedy_page