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

        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName) {

        cy.get(this.weblocators.firstName).type(FName)
    }
    enterlastName(LName) {

        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(email) {

        cy.get(this.weblocators.email).type(email)
    }
    enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }

    clickOncreatAccountButton() {
        cy.get(this.weblocators.creatAccountButton).click()
    }

}