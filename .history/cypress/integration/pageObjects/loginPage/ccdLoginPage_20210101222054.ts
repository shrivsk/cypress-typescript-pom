/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class pfeLoginPage {

    openCcdUrl() {
        cy.visit(`${Cypress.env('ccdAatUrl')}`)
    }

    enterCcdBetaUserID() {
        const emailAdress = cy.get('#username')
        emailAdress.clear()
        emailAdress.type(`${Cypress.env('ccdbetaEmail')}`)
        cy.log(`"userEmail :--> (${Cypress.env('ccdbetaEmail')})"`);
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this
    }

    enterCcdLaUserID() {
        const emailAdress = cy.get('#username')
        emailAdress.clear()
        emailAdress.type(`${Cypress.env('ccdlaEmail')}`)
        cy.log(`"userEmail :--> (${Cypress.env('ccdEmail')})"`);
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