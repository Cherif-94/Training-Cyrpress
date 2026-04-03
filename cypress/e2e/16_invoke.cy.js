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
        .invoke('isWatching') // invoke command is used to call a function that is inside an object
        .should('equal', 'Hello Hatem');
});
