class LoginPage {
    visit() {
        cy.visit('https://www.wikipedia.org/')
    }

    goToEnglishPage() {
        this.visit();
        cy.get('#js-link-box-ru > strong:nth-child(1)').click();
    }

    CheckEnglishPage() {
        this.goToEnglishPage();
        cy.url().should('include', 'https://ru.wikipedia.org/wiki/')
    }
}

export default LoginPage
