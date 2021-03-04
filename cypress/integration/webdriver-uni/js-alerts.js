/// <reference types="Cypress" />

describe("Handle js alerts", () => {

    it("Confrim js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});

        cy.get('#button1').click();

        cy.on("window:alert", (str) => {
            expect(str).to.equal('I am an alert box!');
        });
    });

    
    it("Validate js confrim alert box works correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});

        cy.get('#button4').click();

        cy.on("window:alert", (str) => {
            return true;
        });
        cy.get('#confirm-alert-text').should('be.visible');
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confrim alert box works correctly when clicking cancel", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});
        
        cy.get('#button4').click();

        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get('#confirm-alert-text').should('be.visible');
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it.only("Validate js confrim alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();

        cy.on("window:confirm", stub);
        
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then( () => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });

});