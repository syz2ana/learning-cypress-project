/// <reference types="Cypress" />


describe("veryfinh variables, cypress commands and jquery commands", ()=>{
    it("Navigating to specific product pages", ()=>{
        cy.visit("https://automationteststore.com/")
        // The following will pass 
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();
        // The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();
        // makeupLink.click();
    
        //Recommended Approach 
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
   
    });

    it("Navigating to a specific product pages", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        
        //The following code will fail
        // const header = cy.get("h1 .maintext");
        // cy.log(header);

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found headerText: " + headerText);
            expect(headerText).is.eq("Makeup");
        });

    });

    it.only("Validate properties of contact us page", ()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // Uses cypress commands and chaining 
        cy.contains("#ContactUsFrm",'Contact Us Form').find("#field_11").should('contain','First name');

        //JQuery approach 
        cy.contains("#ContactUsFrm",'Contact Us Form').then((text)=>{
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

            
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
            })

        }); 
    });
    
})

//Using constants can be quite tricky because we can not guarante the order fo sequence 
