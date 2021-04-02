/// <reference types="cypress" />
// ***********************************************

// ***********************************************

// ***********************************************
export class aboutThePetitionerPage {
  // solicitorCreateSolAboutThePetitioner-page
  aboutThePetitioner() {
   cy.get('#D8PetitionerFirstName').type('D8Petitioner FirstName')
   cy.get('#D8PetitionerLastName').type('D8Petitioner lastname')
   // cy.get('#D8PetitionerNameDifferentToMarriageCert-Yes').click()
   cy.get('#D8PetitionerNameDifferentToMarriageCert-No').click()
   cy.waitUntil(() => cy.get('#D8DivorceWho').select('Wife'))
   cy.get('#D8InferredPetitionerGender').select('Male')
   // cy.get('#D8MarriageIsSameSexCouple-Yes').click()
   cy.get('#D8MarriageIsSameSexCouple-No').click()
   cy.get('#D8DerivedPetitionerHomeAddress').type('petitioner home address')
   cy.get('#D8PetitionerPhoneNumber').type('99999999999')
   cy.get('#D8PetitionerEmail').type('pfe_test_771519@mailinator.com')
   cy.get('#D8PetitionerContactDetailsConfidential').select('-')
   cy.get('[type="submit"]').click()
  }
}
export default aboutThePetitionerPage
