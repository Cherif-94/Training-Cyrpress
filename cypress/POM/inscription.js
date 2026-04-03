class Register {



    get firstNameInput() {
        return cy.get('[data-testid="first-name"]').type('Romain');
    }

    get lastNameInput() {
        return cy.get('[data-testid="last-name"]').type('QA_Romain');
    }

    get emailInput() {
        return cy.get('[data-testid="email"]').type(`${Date.now()}@test.com`);

    }

    get passwordInput() {
        return cy.get('[data-testid="password"]').type('123456789');

    }

    get confirmPasswordInput() {
        return cy.get('[data-testid="confirm-password"]').type('123456789');

    }

    get submitButton() {
        return cy.get('.MuiButton-label').click()

    }
}

export default Register