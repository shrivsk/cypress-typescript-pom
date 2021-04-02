/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class aboutTheSolicitorPage {
  // solicitorCreateSolAboutTheSolicitor-page
  // cy.waitUntil(() => cy.get('#PetitionerSolicitorName').type('PetitionerSolicitorName'))
  // cy.get('#PetitionerSolicitorName',{ timeout: 50000 }).reload()

  petitionerWithShareCase() {
    cy.get('#PetitionerSolicitorName', { timeout: 50000 }).should('be.visible').type('PetitionerSolicitorName');
    // cy.get('#PetitionerSolicitorFirm').type('PetitionerSolicitorFirm')
    cy.get('#DerivedPetitionerSolicitorAddr').type('DerivedPetitionerSolicitorAddr')
    cy.get('#D8SolicitorReference').type('D8SolicitorReference')
    cy.get('#PetitionerSolicitorPhone').type('99999999999')
    cy.get('#PetitionerSolicitorEmail').type('Solicitor_test@mailinator.com')
    // option ( yes or no )
    cy.get('#SolicitorAgreeToReceiveEmails-Yes').click()
    // cy.get('#SolicitorAgreeToReceiveEmails-No').click()
    cy.get('#search-org-text', { timeout: 50000 }).type(`${Cypress.env('DivPetitionerSolicitorFirm')}`)
    cy.get('.td-select > a').click()
    cy.get('[type="submit"]').click()
  }
  petitionerWithoutShareCase() {
    cy.get('#PetitionerSolicitorName', { timeout: 50000 }).should('be.visible').type('PetitionerSolicitorName');
    cy.get('#PetitionerSolicitorFirm').type('PetitionerSolicitorFirm')
    cy.get('#DerivedPetitionerSolicitorAddr').type('DerivedPetitionerSolicitorAddr')
    cy.get('#D8SolicitorReference').type('D8SolicitorReference')
    cy.get('#PetitionerSolicitorPhone').type('99999999999')
    cy.get('#PetitionerSolicitorEmail').type('Solicitor_test@mailinator.com')
    // option ( yes or no )
    cy.get('#SolicitorAgreeToReceiveEmails-Yes').click()
    // cy.get('#SolicitorAgreeToReceiveEmails-No').click()
    // cy.get('#search-org-text', { timeout: 50000 }).type(`${Cypress.env('DivPetitionerSolicitorFirm')}`)
    // cy.get('.td-select > a').click()
    cy.get('[type="submit"]').click()
  }


}
export default aboutTheSolicitorPage
