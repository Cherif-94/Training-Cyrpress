/// <reference types= "cypress" />
import LoginPage from "../POM/Login";
describe('Authentification suite ', () => { // describe : permet de regrouper les tests liés à une fonctionnalité ou un module spécifique. Il prend deux arguments : une chaîne de caractères qui décrit le groupe de tests et une fonction qui contient les tests eux-mêmes.
  const DashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  const LoginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  const loginPage = new LoginPage();
  // console.log('LoginPage instance:',loginPage) 

  beforeEach(() => { // beforeEach : est une fonction qui s'exécute avant chaque test dans le bloc describe. Cela permet de configurer un état initial pour chaque test, garantissant ainsi que les tests sont indépendants les uns des autres.
    loginPage.Visit;
  })



  it('Login cas passant avec username valid et un password valid', () => {      // it : représente un cas de test individuel. Il prend également deux arguments : une chaîne de caractères qui décrit le cas de test et une fonction qui contient les étapes du test.     

    cy.fixture('data_auth').then((data) => {
      loginPage.getUsername.type(data.usernameValid);
      loginPage.getPassword.type(data.passwordValid);
      loginPage.getLoginButton.click();
      cy.url().should('equal', DashboardUrl); // Vérifie que l'URL actuelle est égale à l'URL attendue après la connexion réussie
      cy.url().should('include', DashboardUrl); // Vérifie que l'URL actuelle contient la chaîne de caractères "/dashboard/index", 
      loginPage.CheckDashboard.should('be.visible').and('have.text', 'Dashboard');
    })

  });

  it('Login cas non passant avec username valid et password invalid', () => {
    loginPage.getUsername.type('Admin');
    loginPage.getPassword.type('admin');
    loginPage.getLoginButton.click();
    loginPage.getErrorMessage.should('be.visible').and('have.text', 'Invalid credentials') // Vérifie que le message d'erreur est visible après une tentative de connexion échouée
    cy.url().should('equal', LoginUrl) // Vérifie que l'URL actuelle est égale à l'URL de connexion après une tentative de connexion échouée
    loginPage.getErrorMessage.should('have.css', 'color', 'rgb(235, 9, 16)') // Vérifie que le message d'erreur a la couleur rouge attendue
  });

  it('Login cas non passant avec username vide et password vide  ', () => { // it.skip : permet de marquer un test comme étant ignoré. Cela signifie que le test ne sera pas exécuté lors de l'exécution de la suite de tests. C'est utile lorsque vous avez des tests qui ne sont pas encore prêts ou qui nécessitent des conditions spécifiques pour être exécutés.
    loginPage.getLoginButton.click();
    loginPage.getRequiredMessage.should('be.visible').and('have.text', 'Required').and('have.css', 'color', 'rgb(235, 9, 16)') // Vérifie que le message d'erreur "Required" est visible pour le champ de nom d'utilisateur
    cy.url().should('equal', LoginUrl);

  });

  after(() => {

    cy.log(' Hello La team, je suis le after ')
  })
  afterEach(() => { // beforeEach : est une fonction qui s'exécute avant chaque test dans le bloc describe. Cela permet de configurer un état initial pour chaque test, garantissant ainsi que les tests sont indépendants les uns des autres.
    cy.log(' Hello La team, je suis le afterEach ')
  })


});