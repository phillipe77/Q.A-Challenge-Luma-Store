// Corrigindo a importação para corresponder ao nome correto da classe
import { searchShirtHomePage } from '../../pages/homePage';

// Corrigindo o nome da instância da classe
const searchShirtObj = new searchShirtHomePage();

describe('Test Automation - Homepage Shirt Search Test', () => {
    before(() => {
        searchShirtObj.openHomepage(); 
    });

    it('should complete the search shirt ', () => {
        searchShirtObj.verifyHomepageElements();
        searchShirtObj.searchForItem('shirt');
        searchShirtObj.checkSearchResults();
        searchShirtObj.clickOnLastSuggestedProduct();
       
    });

});
