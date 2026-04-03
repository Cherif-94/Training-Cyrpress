it('get URL', () => {
    cy.visit('cypress/index.html');
    cy.url().should('contain', 'cypress/index.html');
});
