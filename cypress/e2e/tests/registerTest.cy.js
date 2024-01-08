
import { registerPage } from '../../pages/registerPage';
const registerObj = new registerPage()


describe('test automation', () => {

    it('register flow', () => {
      cy.task('fetchRandomUser').then(user => {
        registerObj.openURL();
        registerObj.enterFirstName(user.firstName);
        registerObj.enterlastName(user.lastName);
        registerObj.enterEmail(user.email);
        registerObj.enterPassword(user.password);
        registerObj.clickOncreatAccountButton();
      });
      
      it('search shirt flow', () => {
        searchShirtTest.openHomepage();
        searchShirtTest.verifyHomepageElements();
        searchShirtTest.searchForItem('shirt');
        searchShirtTest.checkSearchResults();
        searchShirtTest.clickOnLastSuggestedProduct();
    });
    });
  
  });