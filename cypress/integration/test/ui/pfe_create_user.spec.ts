/// <reference types="cypress" />
// ***********************************************
import { pfeLoginPage } from '../../pageObjects/pfepages/login-Page'
// ***********************************************
let ccdCaseId
const login = new pfeLoginPage()
// ***********************************************
describe('create PFE/RFE user', () => {

  it('Should create PFE/RFE user', async () => {
    login.createAatIdamUser()
  })

  // it('Create user using PFE UI', async () => {
    
  // })
})
