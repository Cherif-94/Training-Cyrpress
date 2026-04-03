// To run our test case in more than one view port at once we can use an array and for Each method

['iphone-8', 'ipad-mini', 'macbook-15'].forEach(
    (viewport) => {
        it('should be able to open a website in different views', () => {
            // we can use cy.viewport to set the width and height of the test runner
            // Usefully to test our application in different viewport
            // We can use one of the pre defined view ports by cypress (iphone-9 etc)
            // official url is https://docs.cypress.io/api/commands/viewport#Arguments

            cy.viewport(viewport);
            cy.visit('cypress/index.html');
        });
    }
);

// To see all the options in cypress.json file add the following in your vscode json file

// "json.schemas": [
//     {
//       "fileMatch": ["cypress.json"],
//       "url": "https://on.cypress.io/cypress.schema.json"
//     }
//   ],
