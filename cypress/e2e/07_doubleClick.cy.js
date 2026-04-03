it('dbclick command', () => {
    cy.visit('cypress/index.html');
    cy.get('[value="Click me"]').dblclick();
    // Double-click a DOM element.https://docs.cypress.io/api/commands/dblclick#Syntax
});
