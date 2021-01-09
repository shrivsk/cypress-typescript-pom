/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglishOnly(){

  }
  selectEnglishandWelsh (){
    
  }

    clickContinueButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default languagePreference