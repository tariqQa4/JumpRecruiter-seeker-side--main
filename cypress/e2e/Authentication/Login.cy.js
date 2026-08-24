import Login from "../../PageObjects/AuthenticationPage/LoginPage";

describe('Login As Job Seeker', () => {
  beforeEach(() => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
});

  beforeEach(() => {
    cy.viewport(2560, 1392);
    cy.visit('https://stagging.jumprecruiter.us/');
    cy.contains('button', 'Sign In').click();
  });

  it('Login with email', () => {
    cy.fixture('Login').then((data) => {
      const ln = new Login();

      ln.enterEmail(data.Email);
      ln.enterPassword(data.Password);
      ln.loginButton();

      
    });
  });
});
