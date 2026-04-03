class LoginPage {

    get visitWebsite() {
        return cy.visit('https://qacart-todo.herokuapp.com/');
    }

    get inputEmail() {
        return cy.get('[data-testid="email"]')
    }

    get inputPassword() {
        return cy.get('[data-testid="password"]')
    }

    get submitButton() {
        return cy.get('[data-testid="submit"]')
    }


}

export default LoginPage;