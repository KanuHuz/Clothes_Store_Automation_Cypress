describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login with incorrect email', () => {
        cy.login('testemail', 'asd1')
        cy.fixture('login').then((login) => { // we call login as a yielded element 
                cy.get(login.errorMessageLoginEmail).should('contain', 'Invalid email address')

        })

    })

})


