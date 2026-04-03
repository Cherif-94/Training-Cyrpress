import Authentification from "../API/Auth";
import todoPage from "../POM/Todo";
import Todo from "../API/todo";
import Inscription from "../API/inscription";

import Register from "../POM/inscription";
describe('API Login', () => {
    const register = new Register()
    const todo = new todoPage();
    const tdc = new Todo();
    const inscription = new Inscription();
    var token;

    /* beforeEach(() => {
         auth.Connexion('cherif_qa@gmail.com', '123456789').then((response) => {
             expect(response.body).to.have.property('access_token');
             expect(response.body).to.have.property('firstName');
             expect(response.status).to.eq(200);
             expect(response.body.firstName).to.eq('Cherif QA');
             expect(response.body.access_token).to.exist;
             token = response.body.access_token;
         })
     });*/



    const auth = new Authentification()
    it('Créer une nouvelle tache via interface  ', () => {


        todo.visitTodo
        todo.addTodo
        todo.getTodoInput.type('12h - Seance Musculatiojn')
        todo.submitTodo

    })

    it('Créer une nouvelle tache via API  ', () => {



        tdc.addNewTodo(token)

        cy.visit('/');

        // tdc.iconCompleteItem();


        cy.reload();
    })


    it('Inscription via API ', () => {

        inscription.register().then(response => {
            console.log(response)
        })

    })


    it.only('Inscription via Interface ', () => {
        cy.visit('/signup');
        register.firstNameInput
        register.lastNameInput
        register.emailInput
        register.passwordInput
        register.confirmPasswordInput
        register.submitButton

        cy.url().should('include', '/todo');
    })


})