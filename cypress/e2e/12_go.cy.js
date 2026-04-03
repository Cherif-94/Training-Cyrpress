it('Go command', () => {
    cy.visit('cypress/index.html');
    cy.get('.about').click();
    cy.go('back');
    cy.go('forward');
});
