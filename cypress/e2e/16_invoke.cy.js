it('Invoke command', () => {
    const student = {
        name: 'Hatem',
        family: 'Hatamleh',
        isQA: true,
        isWatching: function () {
            return 'Hello ' + this.name;
        },
    };
    //  cy.visit('cypress/index.html');
    cy.wrap(student)
        .invoke('isWatching')
        .should('contain', 'Hatem');
});
