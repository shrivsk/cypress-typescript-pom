"use strict";
/// <reference types="cypress" />
// ***********************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.ccdLoginPage = void 0;
// ***********************************************
// ***********************************************
var ccdLoginPage = /** @class */ (function () {
    function ccdLoginPage() {
    }
    ccdLoginPage.prototype.openCcdAatUrl = function () {
        cy.visit("" + Cypress.env('ccdAatUrl'));
    };
    ccdLoginPage.prototype.openCcdDemoUrl = function () {
        cy.visit("" + Cypress.env('ccdDemoUrl'));
    };
    ccdLoginPage.prototype.enterCcdBetaUserID = function () {
        var emailAdress = cy.get('#username');
        emailAdress.clear();
        emailAdress.type("" + Cypress.env('ccdbetaEmail'));
        cy.log("\"userEmail :--> (" + Cypress.env('ccdbetaEmail') + ")\"");
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this;
    };
    ccdLoginPage.prototype.enterCcdLaUserID = function () {
        var emailAdress = cy.get('#username');
        emailAdress.clear();
        emailAdress.type("" + Cypress.env('ccdlaEmail'));
        cy.log("\"userEmail :--> (" + Cypress.env('ccdlaEmail') + ")\"");
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this;
    };
    ccdLoginPage.prototype.enterCcdSolicitorUserID = function () {
        var emailAdress = cy.get('#username');
        emailAdress.clear();
        emailAdress.type("" + Cypress.env('ccdSolicitorEmail'));
        cy.log("\"userEmail :--> (" + Cypress.env('ccdSueruserEmail') + ")\"");
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this;
    };
    ccdLoginPage.prototype.enterCcdSueruserUserID = function () {
        var emailAdress = cy.get('#username');
        emailAdress.clear();
        emailAdress.type("" + Cypress.env('ccdSueruserEmail'));
        cy.log("\"userEmail :--> (" + Cypress.env('ccdSueruserEmail') + ")\"");
        // cy.allure().parameter(`"userEmail :--> ("${testEmail}")"`,"")
        return this;
    };
    ccdLoginPage.prototype.enterPassword = function () {
        var password = cy.get('#password');
        password.clear();
        password.type("" + Cypress.env('password'));
        return this;
    };
    ccdLoginPage.prototype.clickSubmitButton = function () {
        var signinbtn = cy.get('.button');
        signinbtn.click();
        return this;
    };
    ccdLoginPage.prototype.sumit = function () {
        var sumit = "baseUrl";
        return sumit;
    };
    return ccdLoginPage;
}());
exports.ccdLoginPage = ccdLoginPage;
exports.default = ccdLoginPage;
