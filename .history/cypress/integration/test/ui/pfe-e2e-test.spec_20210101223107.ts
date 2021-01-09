/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { pfeLoginPage } from '../../pageObjects/loginPage/ccdLoginPage'

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()
  it('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
  })
  it.only('Successfully create basic Adultery case using PFE', () => {
   cy.
  })
})
