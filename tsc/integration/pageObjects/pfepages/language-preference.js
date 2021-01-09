"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.languagePreference = void 0;
// ***********************************************
var languagePreference = /** @class */ (function () {
    function languagePreference() {
    }
    languagePreference.prototype.englishOnly = function () {
        var selectEnglish = cy.get('#languagePreferenceWelsh_No');
        selectEnglish.click();
        return this;
    };
    languagePreference.prototype.englishandWelsh = function () {
        var selectEnglishandWelsh = cy.get('#languagePreferenceWelsh_Yes');
        selectEnglishandWelsh.click();
        return this;
    };
    languagePreference.prototype.continueButton = function () {
        var Continuebtn = cy.get('.govuk-button');
        Continuebtn.click();
        return this;
    };
    return languagePreference;
}());
exports.languagePreference = languagePreference;
exports.default = languagePreference;
