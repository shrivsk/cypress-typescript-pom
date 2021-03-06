/// <reference types="cypress" />
// ***********************************************
import "../../../support/commands"

// ***********************************************
const emailName = `pfe_test_${Cypress._.random(0, 999999)}`;
let testEmail = `${emailName}@mailinator.com`;
// ***********************************************
export class pfeLoginPage {


    openPfeUrl() {
        cy.visit(`${Cypress.env('pfeUrl')}`)
    }

    enterUserID() {
        const emailAdress = cy.get('#username')
        emailAdress.clear()
        emailAdress.type(`${testEmail}`)
        cy.log(`"userEmail :--> ("${testEmail}")"`);
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this
    }

    enterPassword() {
        const password = cy.get('#password')
        password.clear()
        password.type(`${Cypress.env('password')}`)
        return this
    }

    clickSubmitButton() {
        const signinbtn = cy.get('.button')
        signinbtn.click()
        return this
    }
}
export default pfeLoginPage