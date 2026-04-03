it('clock command', () => {
    let now = new Date().getTime();
    cy.clock(now);
    console.log(now.toString())
    cy.visit('cypress/index.html');
});
