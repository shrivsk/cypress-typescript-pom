/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/loginPage/loginPage'
// ***********************************************
let ccdCaseId
// ***********************************************
describe('Successfully create Adultery case using PFE', () => {
  const pfeCreateUser = new pfeLoginPage()

  it.only('Successfully create PFE user', async () => {
    ccdCaseId = pfeCreateUser.createIdamUser()
  })
})
