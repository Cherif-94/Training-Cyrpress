class LoginPage {


    get Visit() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    get getUsername() {
        return cy.get('[name="username"]');
    }

    get getPassword() {
        return cy.get('[name="password"]');
    }

    get getLoginButton() {
        return cy.get('.oxd-button')
    }

    get CheckDashboard() {
        return cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    }

    get getErrorMessage() {
        return cy.get('.oxd-alert-content > .oxd-text');
    }

    get getRequiredMessage() {
        return cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
    }

}

export default LoginPage;