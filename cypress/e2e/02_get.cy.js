// We use the Get command to find an element or elements
// we can find an element by tag name



it('find element by tag name', () => { // only execute this test case
    cy.visit('cypress/index.html');
    // we put the tag name inside the get command
    // HTML tag
    // The get command will return all the elements that matches the tag name
    cy.get('button');

    cy.get('[name="Banana"]').check();
    cy.get('[name="Tester"]').check();
    cy.get('[name="Fries"]').check();
    cy.get('[name="courses"]').select('appium');
    cy.get('[name="courses"]').select('selenium');
    cy.get('tr:nth-child(5) input.invoice-button').click();
    cy.get('div:nth-child(2) div.card-body button.btn').click();
    cy.get('#inputEmail').click();
    cy.get('#inputEmail').type('test');
    cy.get('#inputPassword').type('test');
    cy.get('input[value="Click me"]').click();
    cy.get('input[value="Click me"]').click();
    cy.get('input.blur').type('test');
});

it('find element by id', () => {
    cy.visit('cypress/index.html');
    // to find any element by ID we use the #
    cy.get('#welcome');

});

it('find element by class name', () => {
    cy.visit('cypress/index.html');
    // to find any element by class name we use the . (dot)
    // In case of compound classes, we choose only class only
    // We can find an element using two classes by adding .class1.class2
    cy.get('.list1.web');
    cy.get('.list3')
});

it('find element by attribute', () => {
    cy.visit('cypress/index.html');
    // to find any element using any attribute we use []
    cy.get('[id="Developer"]');

});

it('find the first element from a list of elements', () => {
    cy.visit('cypress/index.html');
    // to find the first element from a list of elements we use the first() command
    cy.get('h1').eq(0);

});

it('find the last element from a list of elements', () => {
    cy.visit('cypress/index.html');
    // to find the last element from a list of elements we use the last() command
    cy.get('h1').first();

});

it('find the an element from a list of elements by index', () => {
    cy.visit('cypress/index.html');
    // to find the  element from a list of elements by index we use eq(index)
    // elements are saved in an array , Zero index
    cy.get('h1').eq(2);

});

it('find the an element from a list of elements using filter', () => {
    cy.visit('cypress/index.html');
    // to filter some elements from a list of elements we use the filter command
    // we use css selectors inside the filter command
    cy.get('li').filter('.web').eq(2)

});

it('find the elements using the children command', () => {
    cy.visit('cypress/index.html');
    // to find elements using the parent we use the children command
    // we can use the children command without any arguments and in that case it will return all the children
    cy.get('.course-list').children();

    // We can add some css selectors to filter our some of the children
    cy.get('.course-list').children('.web');
    cy.get('.course-list').children().first();
    cy.get('.course-list').children().last();
    cy.get('.course-list').children().eq(2);

});

it('find the elements using the children command', () => {
    cy.visit('cypress/index.html');
    // we can find elements based on the parent using the find command .find(css selector)
    cy.get('.course-list').find('.web');

});

it('find the elements using the parent command', () => {
    cy.visit('cypress/index.html');
    // to find elements using the children we use the parent command
    // Parent command will return the direct parent of the element
    cy.get('.list1.web').parent();

});

it.only('find the elements using the parents command', () => {
    cy.visit('cypress/index.html');
    // to find elements using the children we use the parents command
    // Parents command will return the all  parents of the element in an array
    cy.get('.list1.web').parents();

});

it('find the elements using the siblings command', () => {
    cy.visit('cypress/index.html');
    // to find elements using the sibling we use the siblings command
    // siblings command will return the all  siblings(brother) of the element in an array
    cy.get('.list1.web').siblings('.web');

});

it.only('find the elements by text', () => {
    cy.visit('cypress/index.html');
    // To find any element using text we can use the contains Command .contains(text)
    cy.contains('Appium');
    cy.get('li').contains('Appium');

});



