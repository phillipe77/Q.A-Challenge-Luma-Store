// Corrigindo a importação para corresponder ao nome correto da classe
import { searchShirtHomePage } from '../../pages/homePage';

// Corrigindo o nome da instância da classe
const searchShirtTest = new searchShirtHomePage();

describe('Homepage Shirt Search Test', () => {

    it('search shirt flow', () => {
        searchShirtTest.openHomepage();
        searchShirtTest.verifyHomepageElements();
        searchShirtTest.searchForItem('shirt');
        searchShirtTest.checkSearchResults();
        searchShirtTest.clickOnLastSuggestedProduct();
    });

});
