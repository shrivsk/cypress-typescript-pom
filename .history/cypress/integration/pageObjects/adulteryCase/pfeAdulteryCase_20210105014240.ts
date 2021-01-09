/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../loginPage/pfeLoginPage'
// ***********************************************
export class pfeAdulteryCase {

  pfeLoginPg: pfeLoginPage

  constructor() {
    this.pfeLoginPg = new pfeLoginPage()
  }
  
  basicAdulteryCase() {
    const lP = this.pfeLoginPg
    lP.createIdamUser()
    lP.openPfeUrl()
    lP.enterUserID()
    lP.enterPassword()
    lP.clickSubmitButton()
    cy.get('#languagePreferenceWelsh_No').click()
    cy.get('.govuk-button').click()
    cy.get('#screenHasMarriageBroken_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#screenHasRespondentAddress_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#screenHasMarriageCert_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('.govuk-button').click()
    cy.get('.govuk-heading-l').contains('Do you want help paying your fee?')
    cy.get('#helpWithFeesNeedHelp_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#helpWithFeesAppliedForFees_Yes').click()
    cy.get('#helpWithFeesReferenceNumber').type('HWF-111-111')
    cy.get('.govuk-button').click()
    cy.get('#divorceWho_wife').click()
    cy.get('.govuk-button').click()
    cy.get('#marriageDateDay').type("01")
    cy.get('#marriageDateMonth').type("01")
    cy.get('#marriageDateYear').type("2011")
    cy.get('.govuk-button').click()
    cy.get('#marriedInUk_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#jurisdictionPetitionerResidence_Yes').click()
    cy.get('#jurisdictionRespondentResidence_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#jurisdictionConfidentLegal_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#petitionerContactDetailsConfidential_share').click()
    cy.get('.govuk-button').click()
    cy.get('#petitionerFirstName').type("petitionerFirstName")
    cy.get('#petitionerLastName').type("petitionerLastName")
    cy.get('#respondentFirstName').type("respondentFirstName")
    cy.get('#respondentLastName').type("respondentLastName")
    cy.get('.govuk-button').click()
    cy.get('#marriagePetitionerName').type("marriagePetitionerName")
    cy.get('#marriageRespondentName').type("marriageRespondentName")
    cy.get('.govuk-button').click()
    cy.get('#petitionerNameDifferentToMarriageCertificate_No').click()
    cy.get('.govuk-button').click()
    cy.get('#petitionerConsent').click()
    cy.get('.govuk-button').click()
    cy.get('#enter-manual').click()
    cy.get('#addressManual').type("enter-manual")
    cy.get('.govuk-button').click()
    cy.get('#petitionerCorrespondenceUseHomeAddress_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#livingArrangementsLiveTogether_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#respondentCorrespondenceUseHomeAddress_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#adultery').click()
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdulteryWishToName_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdultery3rdPartyFirstName').type("Adultery first name")
    cy.get('#reasonForDivorceAdultery3rdPartyLastName').type("Adultery last name")
    cy.get('.govuk-button').click()
    cy.get('#enter-manual').click()
    cy.get('#addressManual').type("Adultery address")
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdulteryKnowWhere_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdulteryKnowWhen_Yes').click()
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdulteryWhenDetails').type("reasonForDivorceAdulteryWhenDetails")
    cy.get('#reasonForDivorceAdulteryWhereDetails').type("reasonForDivorceAdulteryWhereDetails")
    cy.get('#reasonForDivorceAdulteryDetails').type("reasonForDivorceAdulteryDetails")
    cy.get('.govuk-button').click()
    cy.get('#reasonForDivorceAdulterySecondHandInfo_No').click()
    cy.get('.govuk-button').click()
    cy.get('#legalProceedings_No').click()
    cy.get('.govuk-button').click()
    cy.get('#financialOrder_No').click()
    cy.get('.govuk-button').click()
    cy.get('.govuk-heading-l').contains('Do you want to apply to claim your divorce costs?')
    cy.get('#no').click()
    cy.get('.govuk-button').click()
    cy.get('.govuk-button').click()
    cy.get(':nth-child(2) > .govuk-button').click()
    cy.get('.govuk-heading-l').contains('Check your answers')
    cy.get('#confirmPrayer').click()
    cy.get('#confirmCheckYourAnswers').click()
    cy.get('.govuk-panel__title')
    .then(function($AppComp){
      const AppComptxt=$AppComp.text()
      expect(AppComptxt).eq('Application complete')
    })
    cy.screenshot('Application complete')
    cy.get('.govuk-body-reference-number')
      .then(function($caseid){
      const ccdCaseId=$caseid.text().trim().split(' - ').join('')
      expect(ccdCaseId.split(' - ').join()).eq(ccdCaseId)
      cy.log('Case ID -->'+ ccdCaseId)
  })
}}
export default pfeAdulteryCase