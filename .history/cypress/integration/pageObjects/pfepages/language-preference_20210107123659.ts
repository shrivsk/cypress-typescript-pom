/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class languagePreference {

  selectEnglishOnly(){

  }
  selectEnglish and Welsh (){
    
  }

    clickSubmitButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default languagePreference