import Auteur from "../API/Athor";
describe('template spec', () => {

    const auteur = new Auteur();

    it('Ajouter un todo', function () {

        auteur.auteur().then((response) => {
            console.log('le retour de mon api est le suivant : ', response)
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('author');
            expect(response.body.data.quote).to.exist;
            expect(response.statusText).to.eq('OK');



        })
    });



})

