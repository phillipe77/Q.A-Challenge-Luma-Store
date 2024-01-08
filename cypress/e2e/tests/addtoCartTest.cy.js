import { menPage } from '../../pages/menPage';
const menPageObj = new menPage();

describe('Test Automation - Add To Cart Flow', () => {
    before(() => {
        menPageObj.openHomepage();
    });

    it('should randomly select a category and a product and add it to the cart', () => {
        menPageObj.selectRandomCategory();
        // Substitua os comentários abaixo por comandos Cypress que esperam a navegação ou a presença de um elemento específico.
        menPageObj.selectRandomProduct();
        // Adiciona espera para garantir que a página do produto seja carregada
        menPageObj.selectRandomSizeAndColor(); // Seleciona tamanho e cor aleatórios
        menPageObj.addToCart();
        // Aqui você pode verificar a mensagem de sucesso ou a existência do produto no carrinho.
        menPageObj.verifyProductAddedToCart()
         // Novas chamadas para interagir com a aba de avaliações
        menPageObj.openReviewsTab();
        menPageObj.fillReviewForm();
        menPageObj.submitReview();
    });
});
