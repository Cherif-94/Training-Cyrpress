it('Its command', () => {
    const student = {
        name: 'Hatem',
        family: 'Hatamleh',
        isQA: true,
        isWatching: function () {
            console.log('He is watching');
        },
    };
    // cy.visit('cypress/index.html');
    // cy.wrap(student).its('family').should('eql', 'Hatamleh'); // its command is used to get the property of an object

    cy.wrap(student).then((data) => {
        expect(data).to.have.property('family', 'Hatamleh');
        expect(data).to.have.property('name', 'Hatem');
        expect(data.isQA).to.eql(true);

    })
});
