// const { describe } = require("mocha");

/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", ()=>{
    before(function() {
        cy.viewport(550,750);
    })

    //happy path - with css selectors    
    it("Should be able to submit a successful submission via contact us form", ()=>{
        cy.visit("http://www.automationteststore.com/");
         //XHR logs help the dev to improve the product 
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get("#ContactUsFrm_first_name").type("Suzi");
        cy.get("#ContactUsFrm_email").type("suzi123@gmail.com");
        cy.get('[id="ContactUsFrm_enquiry"]').type("Hello Wrodl2");
        // cy.get("#ContactUsFrm_enquiry").type("Hello World!");
        // cy.get("title=Submit").click(); // learn how to use properly
        // cy.get('.col-md-6 > .btn').click();
        cy.get('button[title=Submit]').click(); // this is a more robust way to use sellectors

    });
    // with xpath selectors 
    it("Should be able to submit a successful submission via contact us form", ()=>{
        Cypress.currentTest.retries(4);
        cy.visit("http://www.automationteststore.com/");
         //XHR logs help the dev to improve the product 
        //cy.get('.info_links_footer > :nth-child(5) > a').click(); 1
        //imporvement of 1
        cy.get("a[href$='contact']").click(); // dynamic selector
        // cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get("#ContactUsFrm_first_name").type("Suzi");
        cy.get("#ContactUsFrm_email").type("suzi123@gmail.com");
        cy.get('[id="ContactUsFrm_enquiry"]').type("Hello Wrodl2");
        // cy.get("#ContactUsFrm_enquiry").type("Hello World!");
        // cy.get("title=Submit").click(); // learn how to use properly
        // cy.get('.col-md-6 > .btn').click(); 2
        // cy.get('button[title=Submit]').click(); // this is a more robust way to use sellectors
        // improvement of 2 
        cy.get("button[title='Submit']").click();
    });

})  