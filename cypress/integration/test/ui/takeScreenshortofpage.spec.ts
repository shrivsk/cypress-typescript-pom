/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let ccdCaseId
const login = new pfeLoginPage()
// ***********************************************
describe('take screenshort of the page ', () => {

  it('open confluance and take screenshhort of each page', async () => {
    cy.visit('https://tools.hmcts.net/confluence/')
    cy.get('#login-link').click()
    cy.get('#os_username').type('sumit.shrivastava')
    cy.get('#os_password').type('Oimage#01')
    cy.get('#loginButton').click()
    cy.visit('https://tools.hmcts.net/confluence/dopeopledirectorysearch.action?queryString=&ShowOnlyPersonal=false&startIndex=0&__ncforminfo=sl8VX9CcDOtU1c-OxGwQ9LdyOrvFhlKGGwCtCB7gt8yjfvn_v7YG2BW58kziONUGNr4XTFPp1Ucuz8TV6T1km6rJz5QVquwj7NdhQkuE58-U2doDrjh0tQ==')
    cy.screenshot('People Directory Page >> 1') 
    let numbers = [2,3, 4, 5 ,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
    for (let num of numbers){
    // cy.get('#peoplelist > .aui-nav > :nth-child('+`${num}`+')> a').click()
    cy.get('.aui-nav-next > a').click()
    cy.screenshot('People Directory Page >>'+`${num}`)
    }
  })


})
