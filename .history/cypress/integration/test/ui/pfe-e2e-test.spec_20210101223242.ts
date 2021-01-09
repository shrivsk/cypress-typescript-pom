/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { ccdLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  ccdLoginPg: pfeLoginPage

  constructor() {
    this.pfeLoginPg = new pfeLoginPage()
  }

  it('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
  })
  it.only('Successfully create basic Adultery case using PFE', () => {
   cy.
  })
})
