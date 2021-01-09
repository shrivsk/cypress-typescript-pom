"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pfeLoginPage = void 0;
/// <reference types="cypress" />
/// <reference path="../../../support/index.d.ts" />
// ***********************************************
require("../../../support/commands");
// ***********************************************
var emailName = "pfe_test_" + Cypress._.random(0, 999999);
var testEmail = emailName + "@mailinator.com";
// ***********************************************
var pfeLoginPage = /** @class */ (function () {
    function pfeLoginPage() {
    }
    pfeLoginPage.prototype.createIdamUser = function () {
        var sum = cy.createIdamUser("" + testEmail, "" + Cypress.env("apiTestingSupportUrl"));
        cy.writeFile('cypress/fixtures/pfe_Creted_CaseId.txt', "\n" + testEmail, { flag: 'a+' });
        cy.log("" + sum);
    };
    pfeLoginPage.prototype.openPfeAatUrl = function () {
        cy.visit("" + Cypress.env('pfeAatUrl'));
    };
    pfeLoginPage.prototype.openPfeDemoUrl = function () {
        cy.visit("" + Cypress.env('pfeDemoUrl'));
    };
    pfeLoginPage.prototype.enterUserID = function () {
        var emailAdress = cy.get('#username');
        emailAdress.clear();
        emailAdress.type("" + testEmail);
        cy.log("\"userEmail :--> (\"" + testEmail + "\")\"");
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this;
    };
    pfeLoginPage.prototype.enterPassword = function () {
        var password = cy.get('#password');
        password.clear();
        password.type("" + Cypress.env('password'));
        return this;
    };
    pfeLoginPage.prototype.clickSubmitButton = function () {
        var signinbtn = cy.get('.button');
        signinbtn.click();
        return this;
    };
    return pfeLoginPage;
}());
exports.pfeLoginPage = pfeLoginPage;
exports.default = pfeLoginPage;
