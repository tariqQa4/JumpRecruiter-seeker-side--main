class SavedJob{

    clickOnJobHeader(){
        cy.contains('a', 'Jobs').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
    }

    clickOnSavedJobTab(){
        cy.contains('button', 'My Job').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000)
        // cy.scrollTo('bottom',{ duration: 3000 })
        // cy.scrollTo('top', { duration: 3000 })
    }

    findJobFilter(){
         // Type in the Job Title input
    cy.get('input[placeholder="Search by Job, Keyword, or Company"]')
      .clear()
      .should("be.visible")
      .type("Data Analyst", { delay: 100 });

    // Wait for dropdown to appear and select the first option
    cy.get(".MuiAutocomplete-popper li").first().should("be.visible").click();

    // Type into the Location field
    cy.get('input[placeholder="City, State, or Country"]')
      .should("be.visible")
      .type("Cold Bay, AK, 99571", { delay: 100 });

    // Wait for the autocomplete dropdown to load and click the first result
    cy.get(".MuiAutocomplete-popper li", { timeout: 10000 })
      .first()
      .should("be.visible")
      .click();
    cy.wait(2000);
      // clear all filters
        cy.go('back')
        cy.wait(2000)
    }

    saveUnsaveJob(){
        cy.contains("a", "Jobs").click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000);
        cy.contains('button', 'My Job').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000);
        cy.get("div.cursor-pointer svg")
        .should("exist")
        .first()
        .click({ force: true }).should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        // cy.get('div.cursor-pointer').eq(0).click({force: true})  // or eq(1), eq(2) etc.
        cy.wait(2000);
        cy.get('a[href="/"] img[alt="Logo"]').click()
    }

}
export default SavedJob