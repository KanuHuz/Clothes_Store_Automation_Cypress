Cypress.Commands.add('login',(email, password)=>{
    cy.fixture('login').then((login) => {
        cy.get(login.loginButton).click();
        cy.get(login.emailField).type(email);
        cy.get(login.passwordField).type(password);
        cy.get(login.submitButton).click();
    })
})
