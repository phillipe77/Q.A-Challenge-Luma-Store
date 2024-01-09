
import { registerPage } from '../../pages/registerPage';
const registerObj = new registerPage()


describe('Test Automation - Register ', () => {
  before(() => {
      registerObj.openURL(); 
  });

  it('should complete the registration ', () => {
      cy.task('fetchRandomUser').then(user => {
          registerObj.enterFirstName(user.firstName);
          registerObj.enterlastName(user.lastName);
          registerObj.enterEmail(user.email);
          registerObj.enterPassword(user.password);
          registerObj.clickOncreatAccountButton();
         
      });
  });
});