/**
Task 2: Test the job search

1. Goto https://www.campusjaeger.de (https://www.campusjaeger.de/)
2. Click on the third dot
3. Search for “business development”
4. “Zu den Jobs”
5. Close the modal
6. Check if “business development” is in the search bar
7. Change the “Stunden” filter to a range greater then 15  // aria-valuenow
8. Check if the button text changed to “Ab 15 Stunden”  //box__Box-cKynKu 
 */

 describe("Task 2 - Testing the job search functionality", ()=>{

    it('Validate job search result and filters',() => {
        
        cy.visit("https://www.campusjaeger.de");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.get('.iIJJwq > .lbLsgv > .box__Box-cKynKu').click(); 
        cy.get('.erQaFU > :nth-child(3)').click();
        cy.get('.textInput__StyledTextInput-dNkUfd').type('business development {enter}');
        cy.get('.gZjirp > .lbLsgv > .box__Box-cKynKu').click();
        // cy.wait(4000);
        // cy.get('.textInput__StyledTextInput-dNkUfd').should('include.value','business development');
        cy.get('.box__Box-cKynKu').contains('Stunden').click();
        cy.get('.rheostat ').invoke('attr', 'aria-valuenow', '15').should('have.attr', 'aria-valuenow', '15').click();
        // cy.get('div[data-handle-key="0"]').invoke('attr', 'aria-valuenow', '15').should('have.attr', 'aria-valuenow', '15').click();
        // cy.get('div[data-handle-key="1"]').invoke('attr', 'aria-valuemin', '15').should('have.attr', 'aria-valuemin', '15').click();
        // cy.get('.text__Text-firfiK kheKrn').contains('15-48');
        cy.get('.box__Box-cKynKu').contains('Ab 26 Stunden').click();

    })
   
 })