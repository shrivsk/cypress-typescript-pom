/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let ccdCaseId
// ***********************************************
describe('Successfully create PFE/RFE user', () => {
  const pfeCreateUser = new pfeLoginPage()

  it('Successfully create PFE/RFE user', async () => {
    ccdCaseId = pfeCreateUser.createAatIdamUser()
  })
})
