/// <reference types="cypress" />
// ***********************************************
import {pfeAdulteryCase} from '../../pageObjects/adulteryCase/pfeAdulteryCase'
import { pfeLoginPage } from '../../pageObjects/loginPage/pfeLoginPage'
import "../../../support/commands"
// ***********************************************
let ccdCaseId

// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pbasic = new pfeAdulteryCase()

  it.only('Successfully create PFE user', async () => {
    ccdCaseId = pbasic.createUser()
  })
})
