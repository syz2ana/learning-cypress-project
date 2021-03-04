/// <reference types='Cypress' />

describe("Verify radio buttons via webdriveruni", () => {
    
    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check();
        cy.get('#radio-buttons').find('[type="radio"]').first().check();
   
    });

    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
    
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
   
        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');

        cy.get("[value='cabbage']").should('be.disabled');

    });
 
});