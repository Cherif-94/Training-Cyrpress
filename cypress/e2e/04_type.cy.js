it('type command', () => {
    cy.visit('cypress/index.html');
    cy.get('#coverdInput').type('test@gmail.com', {
        force: true,
        delay: 1000,
    });
});

// We can type on any input using the type command
// We can type on a hidden element using force option
// We can delay the type command per seconds, this delay will happen between every character in the string
// We can use some keyboard actions using type --> https://docs.cypress.io/api/commands/type#Arguments
