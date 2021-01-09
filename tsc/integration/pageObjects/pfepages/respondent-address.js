"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondentAddress = void 0;
// ***********************************************
var respondentAddress = /** @class */ (function () {
    function respondentAddress() {
    }
    respondentAddress.prototype.respondentAddress_Yes = function () {
        var respondentAddress_Yes = cy.get('#screenHasRespondentAddress_Yes');
        respondentAddress_Yes.click();
        return this;
    };
    respondentAddress.prototype.respondentAddress_No = function () {
        var respondentAddress_No = cy.get('#screenHasRespondentAddress_No');
        respondentAddress_No.click();
        return this;
    };
    respondentAddress.prototype.continueButton = function () {
        var Continuebtn = cy.get('.govuk-button');
        Continuebtn.click();
        return this;
    };
    return respondentAddress;
}());
exports.respondentAddress = respondentAddress;
exports.default = respondentAddress;
