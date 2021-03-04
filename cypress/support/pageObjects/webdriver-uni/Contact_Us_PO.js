class Contact_Us_PO {


    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate) {
        cy.get('[name="first_name"]').type(firstname);
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        //assertion timeout
        //cy.get($selector).contains(textToLocate,{timeout:60000});
        // pause command
        //cy.get($selector).pause().contains(textToLocate, { timeout: 60000 });
        cy.get($selector).contains(textToLocate, { timeout: 6000 });
        cy.screenshot("Made a copy");
    };
}

export default Contact_Us_PO;