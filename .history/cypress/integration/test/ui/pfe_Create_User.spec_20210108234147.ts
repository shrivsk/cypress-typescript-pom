/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/pfepages/loginPage'
// ***********************************************
let ccdCaseId
// ***********************************************
describe('Successfully create PFE user', () => {
  const pfeCreateUser = new pfeLogi/nPage()

  it.only('Successfully create PFE user', async () => {
    ccdCaseId = pfeCreateUser.createIdamUser()
  })
})
