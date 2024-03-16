describe('New tests pack. First cypress Homework', () => {
  it('Base test from cypress', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Fing & click on element', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('.cdx-text-input__input').click().type('wiki');
    cy.get('#searchform > div > button').type('{enter}');
  })

  it('Create accout is displayed', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('#pt-createaccount-2 > a > span').should('be.visible');
  })

  it('Login btn is displayed', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('.user-links-collapsible-item').should('be.visible');
  })

  it('3dots is visible', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')
    cy.get('#vector-user-links-dropdown-checkbox').click({ force: true })
  })
})