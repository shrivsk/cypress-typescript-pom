/// <reference types="cypress" />
// ***********************************************
class solicitorCreateSolMarriageCertificate_Page {
  enterMarriageCertificateDetails () {
    cy.get('#D8MarriageDate-day').type('11')
    cy.get('#D8MarriageDate-month').type('11')
    cy.get('#D8MarriageDate-year').type('2011')
    cy.get('#D8MarriagePetitionerName').type('D8Marriage PetitionerName')
    cy.get('#D8MarriageRespondentName').type('D8Marriage RespondentName')
    cy.get('#D8MarriedInUk-Yes').click()
    cy.get('#D8MarriedInUk-No').click()
    cy.get('#D8MarriagePlaceOfMarriage').type('place of Marriage')
    cy.get('#D8CountryName').type('Country of Marriage')
    cy.get('[type="submit"]').click()
    return this
  }
  
  }
  export default solicitorCreateSolMarriageCertificate_Page 
  