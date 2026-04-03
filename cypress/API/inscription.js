class Inscription {

    register() {

        return cy.api({
            url: '/api/v1/users/register',
            method: 'POST',
            body: {
                firstName: 'Leonard',
                lastName: 'QA',
                // Generate a random email => Email is unique in the app 
                email: `${Date.now()}@test.com`,
                password: '123456789',

            },

        })
    }
}
export default Inscription;
