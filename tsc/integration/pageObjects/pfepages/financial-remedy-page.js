"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.financialRemedy_page = void 0;
// ***********************************************
var financialRemedy_page = /** @class */ (function () {
    function financialRemedy_page() {
    }
    financialRemedy_page.prototype.continueButton = function () {
        var Continuebtn = cy.get('.govuk-button');
        Continuebtn.click();
        return this;
    };
    return financialRemedy_page;
}());
exports.financialRemedy_page = financialRemedy_page;
exports.default = financialRemedy_page;
