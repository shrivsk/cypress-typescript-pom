/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/pfepages/loginPage'
// ***********************************************
let ccdCaseId
// ***********************************************
describe('Successfully create PFE/RFE user', () => {
  const pfeCreateUser = new pfeLoginPage()

  it.only('Successfully create PFE user', async () => {
    ccdCaseId = pfeCreateUser.createIdamUser()
  })
})
