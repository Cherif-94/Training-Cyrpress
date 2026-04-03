class Auteur {

    auteur() {
        return cy.request({
            method: 'GET',
            url: 'https://stoic.tekloon.net/stoic-quote',

        })
    }

}

export default Auteur