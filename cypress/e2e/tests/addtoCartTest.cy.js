import { menPage } from '../../pages/menPage';
const menPageObj = new menPage();

describe('Test Automation - Add To Cart and Submit Review', () => {
    before(() => {
        menPageObj.openHomepage();
    });

    it('should randomly select a category and a product, add the product to the cart, and then submit a review for the product in the cart.', () => {
        menPageObj.selectRandomCategory();
        menPageObj.selectRandomProduct();
        menPageObj.selectRandomSizeAndColor(); 
        menPageObj.addToCart();
        menPageObj.verifyProductAddedToCart()
        menPageObj.openReviewsTab();
        menPageObj.fillReviewForm();
        menPageObj.submitReview();
    });
});
