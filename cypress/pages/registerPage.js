export class registerPage {

    weblocators = {
        firstName:  '#firstname',
        lastName:   '#lastname', 
        email:  '#email_address',
        password: '#password',
        passwordConfirm:'#password-confirmation',
        creatAccountButton:'button.action.submit.primary'
    } 

    openURL() {

        cy.visit(Cypress.env('registerPageUrl'))
    }
    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName).should('have.value', FName);
    }
    enterlastName(LName) {

        cy.get(this.weblocators.lastName).type(LName).should('have.value',LName);
    }
    enterEmail(email) {

        cy.get(this.weblocators.email).type(email).should('have.value',email);
    }
    enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }

    clickOncreatAccountButton() {
        cy.get(this.weblocators.creatAccountButton).click();
        cy.get('.message-success').should('be.visible'); // Confirmação de sucesso
    }

}