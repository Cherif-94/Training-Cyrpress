class Authentification {

    Connexion(email, password) {
        return cy.api({
            method: 'POST',
            url: '/api/v1/users/login',
            body: {           // the body of the request is the data we want to send to the server
                email: email,
                password: password
            }
        })
    }

}

export default Authentification 