it('rightClick command', () => {
    cy.visit('cypress/index.html');
    cy.get('[value="Click me"]').rightclick();
    // Right-click a DOM element.
    //More info --> https://docs.cypress.io/api/commands/rightclick
});
