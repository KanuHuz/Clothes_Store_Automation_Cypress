describe('Searching for elements', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Search for elements with multiple results', () => {
        cy.fixture('index').then((index) => {
           cy.get(index.searchBox).type('dress');
           cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult) => {
           cy.get(searchResult.searchTitle).should('contain','dress');
        })
    })
    it('Search for elements with no results', () => {
       cy.fixture('index').then((index) => {
           cy.get(index.searchBox).type('None');
           cy.get(index.searchButton).click();
      
      })
      cy.fixture('searchResult').then((searchResult) => {
        cy.get(searchResult.alert).should('contain','No results were found for your search');
     })
   })
})