it('wrap command', () => {
    const student = {
        name: 'Hatem',
        family: 'Hatamleh',
        isQA: true,
        isWatching: function () {
            console.log('He is watching');
        },
    };

    const message = 'Welcome to QAcart';

    cy.visit('cypress/index.html');
    cy.wrap(student).should('have.property', 'name', 'Hatem');
    cy.wrap(message).should('eql', 'Welcome to QAcart');
});
