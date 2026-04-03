import FirstApi from "../API/First_Api";

it('get meal', () => {
    const firstApi = new FirstApi();

    firstApi.getMeal().then((response) => {
        console.log(response);
        expect(response).to.have.property('status');
        expect(response).to.have.property('body');
        expect(response).to.have.property('headers');
        expect(response).to.have.property('duration');
        expect(response.body.meals).to.be.an('array');
        expect(response.body.meals).to.not.be.null;
        expect(response.status).to.eq(200);
        expect(response.body.meals).to.exist
        expect(response.body.meals[0].strArea).to.eq('Turkish');
        expect(response.body.meals[0].strIngredient5).to.eq('Sunflower Oil');
        expect(response.body.meals[0].strMeasure2).to.eq('800g');
        expect(response.body.meals.length).to.eq(26);

    })

})