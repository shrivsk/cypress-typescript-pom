/// <reference types="cypress" />
/// <reference path="../../../support/index.d.ts" />
// ***********************************************
import "../../../support/commands"
// ***********************************************
const emailName = `pfe_test_${Cypress._.random(0, 999999)}`;
let testEmail =`${emailName}@mailinator.com`;
// ***********************************************
export class pfeLoginPage {

    createAatIdamUser() {
        cy.createIdamUser(`${testEmail}`, `${Cypress.env("aatTestingSupportUrl")}`)
        cy.writeFile('cypress/fixtures/pfe_Creted_CaseId.txt',`\nCCD-AAT-EmailID --> ${testEmail}`, { flag: 'a+' })
    }

    createDemoIdamUser() {
        cy.createIdamUser(`${testEmail}`, `${Cypress.env("demoTestingSupportUrl")}`)
        cy.writeFile('cypress/fixtures/pfe_Creted_CaseId.txt',`\n'CCD-Demo-CaseId:-'+${testEmail}`, { flag: 'a+' })
    }

    openPfeAatUrl() {
        cy.visit(`${Cypress.env('pfeAatUrl')}`)
    }
    openPfeDemoUrl(){
        cy.visit(`${Cypress.env('pfeDemoUrl')}`) 
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
    pfeAatlogin(){
        this.createAatIdamUser()
        this.openPfeAatUrl()
        this.enterUserID()
        this.enterPassword()
        this.clickSubmitButton()
    }
    pfeDemologin(){
        this.createDemoIdamUser()
        this.openPfeDemoUrl()
        this.enterUserID()
        this.enterPassword()
        this.clickSubmitButton()
    }
}
export default pfeLoginPage