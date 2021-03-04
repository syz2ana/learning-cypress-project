/// <reference types="Cypress" />

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt',5);
        cy.get('@productThumbnail').should('include','Seaweed Conditioner');
    });

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        // MY SOLUTION
         // class thumbnail
        // cy.get('.thumbnail').as('allProducts');
        // cy.get('@allProducts').its('length').should('eq',16);
        //select a product cart
        // cy.get(".productcart").each(($el, index, $list) => {
        //     if($el.index==0){
        //         cy.wrap($el).as("element0").click();
        //         cy.get('@element0').should('include','Add to cart');
        //     }
        // });
        //or 
        // cy.get('.productcart').eq(0).invoke('title').as('addProduct');
        // cy.get('@addProduct').should('include','Add to cart');
        //include assertion to assert the correct length

        // PROFFESORS SOLUTION
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length',16);
       cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart');
    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        var itemsTotal = 0;
        cy.get('@itemPrice').then(($linkText) => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i; 
            for(i = 0; i< itemPrice.length; i++) {
                itemsPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        });
        cy.get('@saleItemPrice').then(($linkText) => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i< saleItemPrice.length; i++) {
               cy.log(saleItemPrice[i]);
               saleItemsPrice += Number(saleItemPrice[i]);
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice);
        })
        .then(() => {
            cy.log("The total price of products is: " + itemsTotal);
            expect(itemsTotal).to.equal(664);
        });
 
  

    });
});