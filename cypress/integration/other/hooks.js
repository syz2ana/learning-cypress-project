/// <reference types="Cypress" />

describe("JSON Object", () => {

    it("Json Object Examples", () => { 
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        
        cy.log(exampleObject['key']);
        cy.log(exampleObject['key2']);
        cy.log(exampleObject.key);
        cy.log(exampleArrayOfValues[1]);
    });


  
});
