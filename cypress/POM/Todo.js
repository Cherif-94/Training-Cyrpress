
class todoPage {


    get visitTodo() {
        return cy.visit('/todo')
    }
    get addTodo() {
        return cy.get('.sc-idiyUo > .MuiButtonBase-root').click();
    }

    get getTodoInput() {
        return cy.get('[data-testid="new-todo"]');
    }

    get submitTodo() {
        return cy.get('[data-testid="submit-newTask"] > .MuiButton-label').click()

    }



}

export default todoPage;