/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class exuiLoginPage {

    openCcdAatUrl() {
        cy.visit(`${Cypress.env('ccdAatUrl')}`)
    }
    openCcdDemoUrl() {
        cy.visit(`${Cypress.env('ccdDemoUrl')}`)
    }  

    openCcdIthcUrl() {
        cy.visit(`${Cypress.env('ccdIthcUrl')}`)
    } 
    
    openCcdPreftestUrl() {
        cy.visit(`${Cypress.env('ccdPreftestUrl')}`)
    } 

    openCcdCustomUrl(url) {
        cy.visit(url)
    } 

    openPfeIthcUrl() {
        cy.visit(`${Cypress.env('pfeIthcUrl')}`)
    }  

    openPfeAatUrl() {
        cy.visit(`${Cypress.env('pfeAatUrl')}`)
    }  

    openPfeDemoUrl() {
        cy.visit(`${Cypress.env('pfeDemoUrl')}`)
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
        cy.log(`"userEmail :--> (${Cypress.env('ccdlaEmail')})"`);
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this
    }

    enterCcdSolicitorUserID(value) {
        const emailAdress = cy.get('#username')
        emailAdress.clear()
        emailAdress.type(value)
        cy.log(`"userEmail :--> (${Cypress.env('ccdSueruserEmail')})"`);
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this
    }

    enterCcdSueruserUserID() {
        const emailAdress = cy.get('#username')
        emailAdress.clear()
        emailAdress.type(`${Cypress.env('ccdSueruserEmail')}`)
        cy.log(`"userEmail :--> (${Cypress.env('ccdSueruserEmail')})"`);
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
    sumit(){
        const sumit="baseUrl"
        return sumit
    }
    loginToAATwithOrgPetSolicitor(value){
        this.openCcdAatUrl()
        this.enterCcdSolicitorUserID(value)
        this.enterPassword()
        this.clickSubmitButton()
        return this
    }
    loginToDEMOwithOrgPetSolicitor(value){
        this.openCcdDemoUrl()
        this.enterCcdSolicitorUserID(value)
        this.enterPassword()
        this.clickSubmitButton()
        return this
    }

    loginToCustomURLandPasswordwithOrgPetSolicitor(url, email){
        this.openCcdCustomUrl(url)
        this.enterCcdSolicitorUserID(email)
        this.enterPassword()
        this.clickSubmitButton()
        return this
    }
    
}
export default exuiLoginPage