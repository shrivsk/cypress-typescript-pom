/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglishOnly(){
    const Continuebtn = cy.get('.button')
    Continuebtn.click()
    return this
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