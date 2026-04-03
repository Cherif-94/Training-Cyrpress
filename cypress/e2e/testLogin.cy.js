import LoginPage from "../POM/Login";
describe('template spec', () => {

    const loginPage = new LoginPage(); // Création d'une instance de la classe LoginPage pour accéder à ses méthodes et propriétés

    it('Ajouter un todo', function () {

        loginPage.visitWebsite;

        cy.fixture('data_auth').then((data) => {
            loginPage.inputEmail.type(data.usernameValid);
            loginPage.inputPassword.type(data.passwordValid);
            loginPage.submitButton.click();
            //cy.get('[data-testid="welcome"]').should('have.text', 'Good afternoon Yann');
            cy.url().should('include', '/todo');

        })
    });



})

