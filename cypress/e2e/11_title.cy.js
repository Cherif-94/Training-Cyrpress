it('get Title', () => {
    cy.visit('cypress/index.html');
    cy.title().should('eql', 'Cypress Tutorials');
});
