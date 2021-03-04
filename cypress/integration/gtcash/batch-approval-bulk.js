describe("Test GTCash", ()=>{
    it("should loign into app and approve batch", ()=>{
        //test 
        cy.visit("https://ch02vwqasrv0003:20100/Arian.aspx?Client=SOGEFRPP_E2E&ID=4892BE31B1C3294C0375377D1E5201#b");
        cy.get("input[name='Login']").type('USER1');
        cy.get("input[name='Password']").type('P@ssw0rd');
        cy.get('#LoginBtn').click();
        cy.get('img[title="Bulk action"]').click();
        cy.get('input[data-column="3"]').type("ACY"); //businessUnit 
        cy.get('input[data-column="9"]').type("10000"); //totalAmount 
        cy.get('input[data-column="12"]').type("12/11/2020"); //fileDate 
        cy.get('#Action_SELECT_ALL').click();
        cy.get('#Action_BULK_APPROVE').click();
        cy.get('#PIN_NUMBER').type("1234");
        cy.get('#lnkEnterPIN').click();

    })
})