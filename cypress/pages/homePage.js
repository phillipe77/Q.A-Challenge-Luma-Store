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
        cy.visit('https://magento.softwaretestingboard.com');
    }

    verifyHomepageElements() {
        cy.get(this.weblocators.logo).should('be.visible');
        // Adicione outras verificações para elementos da homepage conforme necessário
    }

    searchForItem(item) {
        cy.get(this.weblocators.searchBar).type(item);
        cy.get(this.weblocators.searchButton).click();
    }

    checkSearchResults() {
        cy.get(this.weblocators.searchResultsTitle)
            .should('contain', "Search results for: 'shirt'");
    }

    clickOnLastSuggestedProduct() {
        cy.get(this.weblocators.lastProductImage).last().click();
        cy.get(this.weblocators.productInfo).should('be.visible');
    }

}
