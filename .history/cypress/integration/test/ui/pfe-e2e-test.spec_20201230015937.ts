/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeBasicAdulteryCase()
  it.only('Successfully create basic Adultery case using PFE', () => {
    pbasic.basicAdulteryCase()
  })
})
