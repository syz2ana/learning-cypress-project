/*
Task 1: Test “So funktioniert Campusjäger”
1. Goto https://arbeitgeber.campusjaeger.de/
2. Go to the “So funktioniert Campusjäger” section
3. Click through “Nächster Schritt” and assert the titles
*/


describe("Task 1 - Test headlines of 'So funktioniert Campusjager'", () => {

    it("Validating headlines content", () => {

        cy.visit("https://arbeitgeber.campusjaeger.de"); 

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.get('.iIJJwq > .lbLsgv > .box__Box-cKynKu').click();
     
        const headlines = ['1. Leg direkt los','2. Erstelle dein Jobangebot','3. Stelle optimieren und von Experten prüfen lassen',
                '4. Stelle auf über 1.000 Kanälen schalten','5. Kandidaten verwalten und bewerten', '6. Mit wenigen Klicks Termine vereinbaren',
                '7. Gespräche durchführen und Ergebnisse dokumentieren','8. Zusammen entscheiden und die besten Kandidaten einstellen',
                '9. Prämie nur bei Erfolg'];
                
        for (let index = 0 ; index< 9; index++) { 
            cy.get('.eoZEMb > .heading__StyledHeading-yiaah').should('include.text',headlines[index]); 
            if(index==8){
                break;
            }
            cy.get('.box__Box-cKynKu').contains('Nächster Schritt').click();
        }
    })
}) 