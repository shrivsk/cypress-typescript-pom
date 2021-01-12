/// <reference types="cypress" />
// ***********************************************
import 'cypress-wait-until';
import { exuiLoginPage } from '../../pageObjects/exuiPages/loginPage'
import "../../../support/commands"
// ***********************************************

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const exuiLoginPg = new exuiLoginPage()

  it('Successfully create basic Adultery case using CCD Solicitor', async () => {
    exuiLoginPg.openCcdAatUrl()
    exuiLoginPg.enterCcdSolicitorUserID()
    exuiLoginPg.enterPassword()
    exuiLoginPg.clickSubmitButton()
    cy.get(':nth-child(2) > .hmcts-primary-navigation__link').click()
    // cy.waitUntil(() => cy.get('#cc-jurisdiction').should('contain', 'Family Divorce')); 
    cy.get('#cc-jurisdiction').select('Family Divorce').should('contain','Family Divorce')
    cy.get('#cc-case-type').select('Divorce case - v115.00')
    cy.get('#cc-event').select('Apply for a divorce')
    cy.get('.button').click()
    // solicitorCreateSolAboutTheSolicitor-page
    cy.waitUntil(() => cy.get('#PetitionerSolicitorName').type('PetitionerSolicitorName'))
    cy.get('#PetitionerSolicitorFirm').type('solFirstName')
    cy.get('#DerivedPetitionerSolicitorAddr').type('firmdxaddress')
    cy.get('#D8SolicitorReference').type('solirefno')
    cy.get('#PetitionerSolicitorPhone').type('99999999999')
    cy.get('#PetitionerSolicitorEmail').type('solicitor@asdfas.com')
    // option ( yes or no )
    cy.get('#SolicitorAgreeToReceiveEmails-Yes').click()
    // cy.get('#SolicitorAgreeToReceiveEmails-No').click()
    cy.get('[type="submit"]').click()

// solicitorCreateSolAboutThePetitioner-page
cy.get('#D8PetitionerFirstName').type('First name')
cy.get('#D8PetitionerLastName').type('lastname')
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

// solicitorCreateSolAboutTheRespondent-page
cy.get('#D8RespondentFirstName').type('respfirst name')
cy.get('#D8RespondentLastName').type('resplast name')
cy.get('#D8RespondentNameAsOnMarriageCertificate-Yes').click()
cy.get('#D8RespondentFirstName').type('Please explain, if known, how their name has changed since they were married')
cy.get('#D8RespondentNameAsOnMarriageCertificate-No').click()
cy.get('#D8InferredRespondentGender').select('Female')
cy.get('#D8DerivedRespondentHomeAddress').type('The Respondents home address (Optional)')
cy.get('#D8DerivedRespondentCorrespondenceAddr').type('The Respondents service address')
cy.get('[type="submit"]').click()

// solicitorCreateSolMarriageCertificate-page
cy.get('#D8MarriageDate-day').type('11')
cy.get('#D8MarriageDate-month').type('11')
cy.get('#D8MarriageDate-year').type('2011')
cy.get('#D8MarriagePetitionerName').type('Petitioners full name as on marriage certificate')
cy.get('#D8MarriageRespondentName').type('Respondents full name as on marriage certificate')
cy.get('#D8MarriedInUk-Yes').click()
cy.get('#D8MarriedInUk-No').click()
cy.get('#D8MarriagePlaceOfMarriage').type('place of Marriage')
cy.get('#D8CountryName').type('Country of Marriage')
cy.get('[type="submit"]').click()

// solicitorCreateSolJurisdiction-page
cy.get('#D8JurisdictionConnection-G').click()
cy.get('#D8JurisdictionConnection-F').click()
cy.get('#D8JurisdictionConnection-E').click()
cy.get('#D8JurisdictionConnection-D').click()
cy.get('#D8JurisdictionConnection-C').click()
cy.get('#D8JurisdictionConnection-B').click()
cy.get('#D8JurisdictionConnection-A').click()
cy.get('[type="submit"]').click()

// solicitorCreateSolReasonForDivorce-page
cy.get('#D8ReasonForDivorce').select('Adultery')//[5-year separation,2-year separation (with consent),Desertion,Behaviour,Adultery]
cy.get('[type="submit"]').click()

// solicitorCreateSolSOCAdultery1-page
cy.get('#D8ReasonForDivorceAdulteryDetails').type('adultery details')
cy.get('#D8ReasonForDivorceAdulteryAnyInfo2ndHand-Yes').click()
cy.get('#D8ReasonForDivorceAdultery2ndHandDetails').type('second hand information details')
cy.get('#D8ReasonForDivorceAdulteryAnyInfo2ndHand-No').click()
cy.get('[type="submit"]').click()

// solicitorCreateSolSOCCoRespondent-page
cy.get('#D8ReasonForDivorceAdulteryWishToName-Yes').click()
cy.get('#D8ReasonForDivorceAdultery3rdPartyFName').type('Co-resp FName')
cy.get('#D8ReasonForDivorceAdultery3rdPartyLName').type('co-resp Lname')
cy.get('#D8DerivedReasonForDivorceAdultery3rdAddr').type('co-resp address')
// cy.get('#D8ReasonForDivorceAdulteryWishToName-No').click()
cy.get('[type="submit"]').click()

// solicitorCreateSolExistingCourtCases-page
cy.get('#D8LegalProceedings-Yes').click()
cy.get('#D8LegalProceedingsDetails').type('Legal proceeding details')
// cy.get('#D8LegalProceedings-No').click()
cy.get('[type="submit"]').click()

// solicitorCreateSolDividingMoneyAndProperty-pgae
cy.get('#D8FinancialOrder-Yes').click()
cy.get('#D8FinancialOrderFor-children').click()
cy.get('#D8FinancialOrderFor-petitioner').click()
// cy.get('#D8FinancialOrder-No').click()
cy.get('[type="submit"]').click()


// solicitorCreateSolApplyToClaimCosts-page
cy.get('#D8DivorceCostsClaim-Yes').click()
cy.get('#D8DivorceClaimFrom-correspondent').click()
cy.get('#D8DivorceClaimFrom-respondent').click()
// cy.get('#D8DivorceCostsClaim-No').click
cy.get('[type="submit"]').click()

// solicitorCreateSolUploadDocs-page
// cy.get('.panel > .button').click() //( not used)
// cy.get('#D8DocumentsUploaded_0_DocumentType').select()
// cy.get('#D8DocumentsUploaded_0_DocumentEmailContent').type('Email Content')
// cy.get('#D8DocumentsUploaded_0_DocumentDateAdded-day').type('11')
// cy.get('#D8DocumentsUploaded_0_DocumentDateAdded-month').type('11')
// cy.get('#D8DocumentsUploaded_0_DocumentDateAdded-year').type('2011')
// cy.get('#D8DocumentsUploaded_0_DocumentComment').type('comment')
// cy.get('#D8DocumentsUploaded_0_DocumentFileName').type('file name')
cy.get('[type="submit"]').click()

// solicitorCreatelangPref-page
// cy.get('#LanguagePreferenceWelsh-Yes').click()
cy.get('#LanguagePreferenceWelsh-No').click()
cy.get('[type="submit"]').click()

// checkYourAnswers-page
cy.get('.heading-h1').should('contain','Apply for a divorce')
cy.get('.heading-h2').should('contain','Check your answers')
cy.get('[type="submit"]').click()

cy.get('[data-ng-transclude=""] > .alert-message').then(function($caseid){
  const ccdCaseId=$caseid.text().replace(/[^0-9]/g,'')
  // var num = txt.replace(/[^0-9]/g,'');
  expect(ccdCaseId).eq(ccdCaseId)
  cy.log('Case ID -->'+ ccdCaseId)
  cy.wrap(ccdCaseId).as('pfeCaseId')
  cy.writeFile('cypress/fixtures/Soliciter_Creted_CaseId.txt',`\n${ccdCaseId}`, { flag: 'a+' })
  cy.writeFile('cypress/fixtures/Soliciter_CaseId.json',
  { ccdAatCaseId: `${ccdCaseId}` })
})

// .caseid to get 
// [Case #1610405827693731 has been created.]
// cy.get('.markdown > p').retrive the case id 
// [1610405827693731: asdfsa vs resp last name]

// nextStep-SubmitEvent-page
cy.get('#next-step').select('Case submission')
cy.get('.event-trigger > .button').click()

// solicitorStatementOfTruthPaySubmitSolStatementOfTruth-page
// cy.get('#SolUrgentCase-Yes').click() or 
cy.get('#SolUrgentCase-No').click()
cy.get('#SolServiceMethod-courtService').click()
// cy.get('#SolServiceMethod-personalService').click()
cy.get('#SolStatementOfReconciliationCertify-Yes').click()
// cy.get('#SolStatementOfReconciliationCertify-No').click()
cy.get('#SolStatementOfReconciliationDiscussed-Yes').click()
// cy.get('#SolStatementOfReconciliationDiscussed-No').click()
cy.get('#D8StatementOfTruth-Yes').click()
// cy.get('#D8StatementOfTruth-No').click()
cy.get('#solSignStatementofTruth-Yes').click()
// cy.get('#solSignStatementofTruth-No').click()
cy.get('#SolStatementOfReconciliationName').type('yourName')
cy.get('#SolStatementOfReconciliationFirm').type('Firm name')
cy.get('#StatementOfReconciliationComments').type('Additional comments')
cy.get('[type="submit"]').click()

// solicitorStatementOfTruthPaySubmitSolPayment-page Cheque (DO NOT USE), Help with fees,Fee account
// cy.get('#SolPaymentHowToPay').select('Help with fees')
// cy.get('[type="submit"]').click()
// cy.get('#D8HelpWithFeesReferenceNumber').type('HWF-111-111')
// cy.get('[type="submit"]').click()
// cy.get('[type="submit"]').click()
// cy.get('[type="submit"]').click()
// cy.get('.heading-h1').should('eq','Case submission')
// cy.get('.check-your-answers > .heading-h2').should('eq','Check your answers')
// cy.get('[type="submit"]').click()

// payment done using Fee account 
cy.get('#SolPaymentHowToPay').select('Fee account')
cy.get('[type="submit"]').click()
cy.get('#PbaNumbers').select('PBA0077051')
cy.get('#FeeAccountReference').type('Active PBA')
cy.get('[type="submit"]').click()
cy.get('[type="submit"]').click()
cy.get('[type="submit"]').click()
cy.get('.heading-h1').should('contain','Case submission')
// cy.get('.check-your-answers > .heading-h2').should('contain','Check your answers')
cy.get('[type="submit"]').click()

// logout and login session 
cy.get('.hmcts-header__navigation-link').click()

  })
})
