/// <reference types="cypress" />
// ***********************************************
import pfeBasicAdulteryCase from '../../pageObjects/adulteryCase/pfeBasicAdulteryCase'
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeBasicAdulteryCase()
  it.only('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
  })
})
