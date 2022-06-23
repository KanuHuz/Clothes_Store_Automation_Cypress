describe('Login', ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login with incorrect email', () => {
        cy.get('.login').click();
        cy.get('#email').type('testemail');
        cy.get('#passwd').type('asd1');
        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('contain', 'Invalid email address');
    })

})


