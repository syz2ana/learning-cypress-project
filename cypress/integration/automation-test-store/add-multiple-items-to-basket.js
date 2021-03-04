/// <reference types="Cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO';

describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });
    beforeEach(function () {
        cy.clearLocalStorage();
        cy.clearCookies();
        autoStore_Homepage_PO.accessHomePage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();

        // customElements.eyesOpen({appName: 'cypress34hudemyBT', batchName:'add items'})
    });
    it("Add specific items to basket", () => {
        // cy.eyesCheckWindow('test applitools before adding items');
        autoStore_HairCare_PO.addHairCareProductsToBasket();
        // cy.eyesCheckWindow('after adding items');
    });
    // afterEach(()=>cy.eyesClose()); 
});