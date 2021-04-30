/// <reference types="cypress" />


export class f5LoginPage {

  logintoF5Portal() {
    cy.visit('https://portal.platform.hmcts.net/')
    cy.pause()
    cy.get('#login-link').click()
    cy.get('#os_username').type('sumit.shrivastava')
    cy.get('#os_password').type('Oimage#01')
    cy.get('#loginButton').click()
    return this
}

}export default f5LoginPage
