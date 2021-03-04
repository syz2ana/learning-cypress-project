/// <reference types="Cypress" />

describe("Cypress web security", () => {

    it("Validate visiting to different domains", () => {
        cy.visit("https://automationteststore.com/");
        cy.visit("http://webdriveruniversity.com/");
    });

    it("Validate visiting to different domains via user actions", () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#automation-test-store').invoke('removeAttr','target').click();
    });
});
