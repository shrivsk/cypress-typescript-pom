"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasMarriageBroken = void 0;
// ***********************************************
var hasMarriageBroken = /** @class */ (function () {
    function hasMarriageBroken() {
    }
    hasMarriageBroken.prototype.HasMarriageBroken_Yes = function () {
        var marriageBroken_Yes = cy.get('#screenHasMarriageBroken_Yes');
        marriageBroken_Yes.click();
        return this;
    };
    hasMarriageBroken.prototype.screenHasMarriageBroken_No = function () {
        var marriageBroken_No = cy.get('#screenHasMarriageBroken_No');
        marriageBroken_No.click();
        return this;
    };
    hasMarriageBroken.prototype.continueButton = function () {
        var Continuebtn = cy.get('.govuk-button');
        Continuebtn.click();
        return this;
    };
    return hasMarriageBroken;
}());
exports.hasMarriageBroken = hasMarriageBroken;
exports.default = hasMarriageBroken;
