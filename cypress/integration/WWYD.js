describe('ROOMINATE', function() {
  it('works', function() {
    cy.visit('http://localhost:8080')
    cy.get('h1').should('have.text', 'ROOMINATE')
    cy.get('div.title-div').should('have.text', 'HOW TO PLAY')
    cy.get('h3.OVERVIEW').should('have.text', 'OVERVIEW')
    cy.get('h3.REQUIREMENTS').should('have.text', 'REQUIREMENTS')
    cy.get('h3.GAMEPLAY').should('have.text', 'GAMEPLAY')
    cy.get('h3.ADDITIONAL').should('have.text', 'ADDITIONAL FEATURES')
    cy.get('h3.ADDITIONAL').should('have.text', 'ADDITIONAL FEATURES')
    cy
      .get('.splash-buttons .plus-sign ')
      .should('have.text', '+')
      .click()
    cy
      .get('.button-container .play-button ')
      .should('have.text', 'PLAY')
      .click()
  })
})
