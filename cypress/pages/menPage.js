export class menPage {
    weblocators = {
        categoryLinks: '.categories-menu .item > a',
        productItems: 'ol.product-items > li.product-item',
        addToCartButton: '#product-addtocart-button',
        sizeOptions: '.swatch-attribute.size .swatch-option:not(.disabled)',
        colorOptions: '.swatch-attribute.color .swatch-option:not(.disabled)',
        successMessage: 'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
        productName: 'h1.page-title > span.base',
        reviewTab: '#tab-label-reviews-title',
        ratingOption5: '#Rating_5',
        nicknameField: '#nickname_field',
        summaryField: '#summary_field',
        reviewField: '#review_field',
        submitReviewButton: 'button.action.submit.primary'
    }

    openHomepage() {
        cy.visit('https://magento.softwaretestingboard.com/men.html');
    }

    selectRandomCategory() {
        cy.get(this.weblocators.categoryLinks).then($links => {
            const randomIndex = Math.floor(Math.random() * $links.length);
            const selectedCategoryHref = $links[randomIndex].getAttribute('href');
            cy.visit(selectedCategoryHref);
        });
    }

    selectRandomProduct() {
        cy.get(this.weblocators.productItems).then($items => {
            const randomIndex = Math.floor(Math.random() * $items.length);
            const selectedProduct = $items[randomIndex];
            cy.wrap(selectedProduct).find('a.product-item-link').as('productLink');
        cy.get('@productLink').click();

        });
    }

    selectRandomSizeAndColor() {
        cy.wait(2000);
        cy.get(this.weblocators.sizeOptions).then($sizes => {
            const randomSizeIndex = Math.floor(Math.random() * $sizes.length);
            cy.wrap($sizes[randomSizeIndex]).click();
        });
        cy.get(this.weblocators.colorOptions).then($colors => {
            const randomColorIndex = Math.floor(Math.random() * $colors.length);
            cy.wrap($colors[randomColorIndex]).click();
        });
    }

    addToCart() {
        cy.wait(2000); // Espera para carregar opções de tamanho e cor
        cy.get(this.weblocators.addToCartButton).click();
        cy.wait(3000); // Espera explícita de 5 segundos
    }

    verifyProductAddedToCart() {
        cy.get(this.weblocators.productName).invoke('text').then((productName) => {
            cy.get(this.weblocators.successMessage)
                .should('be.visible')
                
        });
    }

    openReviewsTab() {
        cy.get(this.weblocators.reviewTab).click();
    }

    fillReviewForm() {
        // Força a seleção da avaliação de 5 estrelas
        cy.get(this.weblocators.ratingOption5).check({ force: true });
        cy.get(this.weblocators.nicknameField).type(`User${Math.floor(Math.random() * 1000)}`);
        cy.get(this.weblocators.summaryField).type('Ótimo produto, atendeu bem as expectativas.');
        cy.get(this.weblocators.reviewField).type('Produto com material muito bom, estou agora comprando de outra cor pois gostei bastante.');
    }
    

    submitReview() {
        cy.get(this.weblocators.submitReviewButton).click();
    }

    
}
