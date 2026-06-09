class Login {
    enterEmail(Email) {
      cy.get('input[placeholder="you@email.com"]', { timeout: 10000 })
        .should('be.visible')
        .type(Email)
        .then($input => {
          $input.css('border', '3px solid red');
        });
  
      cy.wait(1000);
      cy.contains('button', 'Sign In', { timeout: 10000 }).click({ multiple: true });
    }
  
    enterPassword(Password) {
        cy.get('input[placeholder="Type Password"]', { timeout: 10000 })
        .should('be.visible')
        .type(Password)
        .then($input => {
          $input.css('border', '3px solid red');
        });
    }
  
    loginButton() {
      // cy.contains('button', 'Log in').should('be.visible').click();
      cy.contains('button', 'Sign In').click();

    }
  }
  
  export default Login;
  