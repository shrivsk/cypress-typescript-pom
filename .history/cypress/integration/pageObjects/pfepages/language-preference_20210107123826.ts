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
        const Continuebtn = cy.get('.button')
        Continuebtn.click()
        return this
    }
}
export default languagePreference