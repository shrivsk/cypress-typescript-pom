/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
// ***********************************************
describe.only('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  it.only('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
    cy.allure()
  })
})
