/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglish only 

    clickSubmitButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default languagePreference