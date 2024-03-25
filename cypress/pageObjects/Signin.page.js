class Signin {
    visit() {
        cy.visit('https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0');
    }

    SigninBtn() {
        return cy.get('#pt-login > a:nth-child(1) > span:nth-child(1)');
    }

    LoginField() {
        return cy.get('#wpName1');
    }

    PasswordField() {
        return cy.get('#wpPassword1');
    }

    StayinSystemCheckBox() {
        return cy.get('#wpRemember');
    }

    CreateAccountBtn() {
        return cy.get('#mw-createaccount-join');
    }

    SigninElementsisVisible() {
        this.visit();
        this.SigninBtn().click();
        this.LoginField().should('be.visible');
        this.PasswordField().should('be.visible');
        this.StayinSystemCheckBox().check();
        this.CreateAccountBtn().should('be.visible');
    }

    AddDatainFields() {
        this.visit();
        this.SigninBtn().click();
        this.LoginField().type('wiki@mailinator.com');
        this.PasswordField().type('paSSword!8654');
        this.StayinSystemCheckBox().check();
    }
}

export default Signin;
