/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  select

    clickSubmitButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default languagePreference