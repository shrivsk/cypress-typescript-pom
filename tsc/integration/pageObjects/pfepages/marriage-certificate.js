"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.marriageCertificate = void 0;
// ***********************************************
var marriageCertificate = /** @class */ (function () {
    function marriageCertificate() {
    }
    marriageCertificate.prototype.marriageCert_Yes = function () {
        var marriageCert_Yes = cy.get('#screenHasMarriageCert_Yes');
        marriageCert_Yes.click();
        return this;
    };
    marriageCertificate.prototype.marriageCert_No = function () {
        var marriageCert_No = cy.get('#screenHasMarriageCert_No');
        marriageCert_No.click();
        return this;
    };
    marriageCertificate.prototype.continueButton = function () {
        var Continuebtn = cy.get('.govuk-button');
        Continuebtn.click();
        return this;
    };
    return marriageCertificate;
}());
exports.marriageCertificate = marriageCertificate;
exports.default = marriageCertificate;
