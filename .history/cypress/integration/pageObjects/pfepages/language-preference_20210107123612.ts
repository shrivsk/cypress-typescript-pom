/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  

    clickSubmitButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default languagePreference