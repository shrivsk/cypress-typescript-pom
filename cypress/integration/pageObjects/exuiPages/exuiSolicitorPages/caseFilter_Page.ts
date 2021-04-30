/// <reference types="cypress" />
// ***********************************************
class caseFilter_Page {

clickOnCreateCaseLink() {
  const createCase = cy.get(':nth-child(2) > .hmcts-primary-navigation__link',{timeout: 50000}).should('be.visible')
  createCase.click()
  return this
}

selectCcJurisdiction() {
  const CcJurisdiction = cy.get('#cc-jurisdiction')
  CcJurisdiction.select('Family Divorce', { timeout: 30000 }).should('be.visible')
  return this
}

selectCaseType() {
  const caseType = cy.get('#cc-case-type') 
  caseType.select('Divorce case - v115.00')
  return this
}

selectCaseEvent() {
  const caseEvent = cy.get('#cc-event') 
  caseEvent.select('Apply for a divorce')
  return this
}

buttonClick() {
  const buttonClick = cy.get('.button')
  buttonClick.click()
  return this
}

caseFilterPageForAAT() {
  // const createCase = cy.get('.hmcts-primary-navigation__item').find('Create case',{timeout: 50000}).should('be.visible')
  // createCase.click()
  cy.visit('https://manage-case.aat.platform.hmcts.net/cases/case-filter')
  const CcJurisdiction = cy.get('#cc-jurisdiction')
  CcJurisdiction.select('Family Divorce', { timeout: 30000 }).should('be.visible')
  const caseType = cy.get('#cc-case-type') 
  caseType.select('Divorce case - v115.00') 
  const caseEvent = cy.get('#cc-event') 
  caseEvent.select('Apply for a divorce')
  const buttonClick = cy.get('.button')
  buttonClick.click()
  return this
}

caseFilterPageForDemo() {
  const createCase = cy.get(':nth-child(2) > .hmcts-primary-navigation__link',{timeout: 50000}).should('be.visible')
  createCase.click()
  const CcJurisdiction = cy.get('#cc-jurisdiction')
  CcJurisdiction.select('Family Divorce - v104-26.1', { timeout: 30000 }).should('be.visible')
  const caseType = cy.get('#cc-case-type') 
  caseType.select('Divorce case - v115.00') 
  const caseEvent = cy.get('#cc-event') 
  caseEvent.select('Apply for a divorce')
  const buttonClick = cy.get('.button')
  buttonClick.click()
  return this
}

}
export default caseFilter_Page 
