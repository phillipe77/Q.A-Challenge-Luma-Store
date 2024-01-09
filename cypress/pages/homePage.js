export class searchShirtHomePage {

    weblocators = {
        logo: '.logo',
        searchBar: 'input[name="q"]',
        searchButton: 'button[type="submit"][title="Search"]',
        searchResultsTitle: "span.base[data-ui-id='page-title-wrapper']",
        lastProductImage: 'img.product-image-photo:last-of-type',
        productInfo: '.product-info-main'
    }

    openHomepage() {
        cy.visit(Cypress.env('homePageUrl'));
    }

    verifyHomepageElements() {
        cy.get(this.weblocators.logo).should('be.visible');
        cy.get(this.weblocators.searchBar).should('exist');
        cy.get(this.weblocators.searchButton).should('be.enabled');
    }

    searchForItem(item) {
        cy.get(this.weblocators.searchBar).type(item).should('have.value', item);
        cy.get(this.weblocators.searchButton).click();
    }

    checkSearchResults() {
        cy.get(this.weblocators.searchResultsTitle)
            .should('contain', "Search results for: 'shirt'")
            .and('be.visible');
        cy.get('.products-grid').should('have.length.at.least', 1); // Verifica se ao menos um produto é exibido
    }
    
    clickOnLastSuggestedProduct() {
        cy.get(this.weblocators.lastProductImage).last().click();
        cy.get(this.weblocators.productInfo).should('be.visible');
        cy.url().should('include', 'shirt'); // Verifica se a URL contém 'shirt'

    }

}
