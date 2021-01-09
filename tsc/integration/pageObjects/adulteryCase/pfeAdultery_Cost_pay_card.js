"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pfeAdulteryCase = void 0;
/// <reference types="cypress" />
// ***********************************************
var loginPage_1 = require("../pfepages/loginPage");
var ccdCaseId;
// ***********************************************
var pfeAdulteryCase = /** @class */ (function () {
    function pfeAdulteryCase() {
        this.pfeLoginPg = new loginPage_1.pfeLoginPage();
    }
    pfeAdulteryCase.prototype.basicAdulteryCase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lP, sum;
            return __generator(this, function (_a) {
                lP = this.pfeLoginPg;
                lP.createIdamUser();
                lP.openPfeAatUrl();
                lP.enterUserID();
                lP.enterPassword();
                lP.clickSubmitButton();
                cy.get('#languagePreferenceWelsh_No').click();
                cy.get('.govuk-button').click();
                cy.get('#screenHasMarriageBroken_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#screenHasRespondentAddress_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#screenHasMarriageCert_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('.govuk-button').click();
                cy.get('.govuk-heading-l').contains('Do you want help paying your fee?');
                cy.get('#helpWithFeesNeedHelp_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#helpWithFeesAppliedForFees_Yes').click();
                cy.get('#helpWithFeesReferenceNumber').type('HWF-111-111');
                cy.get('.govuk-button').click();
                cy.get('#divorceWho_wife').click();
                cy.get('.govuk-button').click();
                cy.get('#marriageDateDay').type("01");
                cy.get('#marriageDateMonth').type("01");
                cy.get('#marriageDateYear').type("2011");
                cy.get('.govuk-button').click();
                cy.get('#marriedInUk_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#jurisdictionPetitionerResidence_Yes').click();
                cy.get('#jurisdictionRespondentResidence_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#jurisdictionConfidentLegal_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#petitionerContactDetailsConfidential_share').click();
                cy.get('.govuk-button').click();
                cy.get('#petitionerFirstName').type("petitionerFirstName");
                cy.get('#petitionerLastName').type("petitionerLastName");
                cy.get('#respondentFirstName').type("respondentFirstName");
                cy.get('#respondentLastName').type("respondentLastName");
                cy.get('.govuk-button').click();
                cy.get('#marriagePetitionerName').type("marriagePetitionerName");
                cy.get('#marriageRespondentName').type("marriageRespondentName");
                cy.get('.govuk-button').click();
                cy.get('#petitionerNameDifferentToMarriageCertificate_No').click();
                cy.get('.govuk-button').click();
                cy.get('#petitionerConsent').click();
                cy.get('.govuk-button').click();
                cy.get('#enter-manual').click();
                cy.get('#addressManual').type("enter-manual");
                cy.get('.govuk-button').click();
                cy.get('#petitionerCorrespondenceUseHomeAddress_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#livingArrangementsLiveTogether_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#respondentCorrespondenceUseHomeAddress_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#adultery').click();
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdulteryWishToName_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdultery3rdPartyFirstName').type("Adultery first name");
                cy.get('#reasonForDivorceAdultery3rdPartyLastName').type("Adultery last name");
                cy.get('.govuk-button').click();
                cy.get('#enter-manual').click();
                cy.get('#addressManual').type("Adultery address");
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdulteryKnowWhere_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdulteryKnowWhen_Yes').click();
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdulteryWhenDetails').type("reasonForDivorceAdulteryWhenDetails");
                cy.get('#reasonForDivorceAdulteryWhereDetails').type("reasonForDivorceAdulteryWhereDetails");
                cy.get('#reasonForDivorceAdulteryDetails').type("reasonForDivorceAdulteryDetails");
                cy.get('.govuk-button').click();
                cy.get('#reasonForDivorceAdulterySecondHandInfo_No').click();
                cy.get('.govuk-button').click();
                cy.get('#legalProceedings_No').click();
                cy.get('.govuk-button').click();
                cy.get('#financialOrder_No').click();
                cy.get('.govuk-button').click();
                cy.get('.govuk-heading-l').contains('Do you want to apply to claim your divorce costs?');
                cy.get('#no').click();
                cy.get('.govuk-button').click();
                cy.get('.govuk-button').click();
                cy.get(':nth-child(2) > .govuk-button').click();
                cy.get('.govuk-heading-l').contains('Check your answers');
                cy.get('#confirmPrayer').click();
                cy.get('#confirmCheckYourAnswers').click();
                cy.get('.govuk-panel__title')
                    .then(function ($AppComp) {
                    var AppComptxt = $AppComp.text();
                    expect(AppComptxt).eq('Application complete');
                });
                cy.get('.govuk-body-reference-number')
                    .then(function ($caseid) {
                    ccdCaseId = $caseid.text().split(' ‐ ').join('').trim();
                    expect(ccdCaseId).eq(ccdCaseId);
                    cy.log('Case ID -->' + ccdCaseId);
                    cy.wrap(ccdCaseId).as('pfeCaseId');
                    cy.writeFile('cypress/fixtures/pfe_Creted_CaseId.txt', "\n" + ccdCaseId, { flag: 'a+' });
                    // return ccdCaseId
                });
                cy.screenshot('Application complete');
                cy.log('Case before return ID -->' + ccdCaseId);
                sum = cy.get('@pfeCaseId');
                return [2 /*return*/, sum];
            });
        });
    };
    return pfeAdulteryCase;
}());
exports.pfeAdulteryCase = pfeAdulteryCase;
exports.default = pfeAdulteryCase;
