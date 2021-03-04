/// <reference types="Cypress" />

describe("Iterate over elements", () => {
    it("Log infromation of all Hair Care products", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text());
        });
    
    });

    it("Add specific product to the basket", () => {
        cy.visit("https://automationteststore.com");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().includes("Curls to straight Shampoo")) {
                // $el.click(); JQuery command
                cy.wrap($el).click(); // cypress command
            }
        });
    });
});
