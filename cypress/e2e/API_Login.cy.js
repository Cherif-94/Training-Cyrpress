import AuthApi from '../API/Login_Api';
describe('API Login', () => {
    var token
    beforeEach(() => {
        authApi.tryAuth('cherif_qa@gmail.com', '123456789').then((response) => {
            token = response.body.access_token;
        })


    })
    const authApi = new AuthApi();
    it('Login with valid credentials', () => {

        cy.visit('/todo');

    })



})