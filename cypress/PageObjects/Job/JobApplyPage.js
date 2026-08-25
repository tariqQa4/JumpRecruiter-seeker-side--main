class ApplyJob {
  clickOnJobHeader() {
    cy.contains("a", "Jobs")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }
  findJobFilter() {
   cy.get('input[placeholder="Search by Job, Keyword, or Company"]')
      .clear()
      .should("be.visible")
      .type(" Mid SOFTWARE ENGINEER", { delay: 100 });

    // Wait for dropdown to appear and select the first option
    // cy.get(".MuiAutocomplete-popper li").first().should("be.visible").click();

    // Type into the Location field
    // cy.get('input[placeholder="City, State, or Country"]')
    //   .should("be.visible")
    //   .type("Cold Bay, AK, 99571", { delay: 100 });

    // Wait for the autocomplete dropdown to load and click the first result
    // cy.get(".MuiAutocomplete-popper li", { timeout: 10000 })
    //   .first()
    //   .should("be.visible")
    //   .click();
  cy.get('button.search-btn').click();
  cy.get('div.h-full > div.border.border-gray-700.cursor-pointer')
  .first()
  .click();

    cy.wait(3000)

    cy.contains('button', 'Apply Now').click();
    cy.wait(2000);
    cy.go("back");
    // clear all filters
  //  cy.contains('Clear filter').parent().click()


    cy.wait(3000);
   

  }

  clickOnSpecificjob() {
    cy.get('input[placeholder="Search by Job, Keyword, or Company"]')
      .clear()
      .should("be.visible")
      .type(" Mid SOFTWARE ENGINEER", { delay: 100 });

    // Wait for dropdown to appear and select the first option
    cy.get(".MuiAutocomplete-popper li").first().should("be.visible").click();

    // Type into the Location field
    // cy.get('input[placeholder="City, State, or Country"]')
    //   .should("be.visible")
    //   .type("Cold Bay, AK, 99571", { delay: 100 });

    // Wait for the autocomplete dropdown to load and click the first result
    // cy.get(".MuiAutocomplete-popper li", { timeout: 10000 })
    //   .first()
    //   .should("be.visible")
    //   .click();
  cy.get('button.search-btn').click();
  cy.get('div.h-full > div.border.border-gray-700.cursor-pointer')
  .first()
  .click();

    cy.wait(3000)
    

    cy.scrollTo("top", { duration: 3000 });
    cy.wait(2000);
    cy.contains('button', 'Apply Now').click();

    

    
    
    // cy.get("").click();
    // cy.scrollTo("bottom", { duration: 6000 });
    // cy.scrollTo("top", { duration: 6000 });
  }

  applyNow() {
    

    cy.wait(2000);
    // contact information
    cy.contains("button", "Next").click();
    cy.wait(2000);
    // cy.contains("button", "Submit").click();
    cy.wait(2000);
  }

  // selectResume() {
  //   cy.get("").click();
  //   // next button
  //   cy.get("").click();
  // }

  // enterJobQuestions() {
  //   // Step 1: Open the dropdown
  //   cy.get('[role="combobox"]')
  //     .eq(0) // Select the first combobox
  //     .click(); // Open the dropdown

  //   cy.get('[role="listbox"] li')
  //     .first() // Find the first option inside the listbox
  //     .click(); // Click the first option

  //   // 2nd question

  //   // Step 1: Open the dropdown
  //   cy.get('[role="combobox"]').eq(1).click()

  //   // Step 2: Select the first option
  //   cy.get('ul[role="listbox"] li[role="option"]').first().click();

  //   // 3rd question
   
  //   cy.get('input.MuiInputBase-input.MuiFilledInput-input').type("Your text here");

  //   cy.wait(2000);
  //   cy.get('div.MuiInputBase-root textarea:not([aria-hidden="true"])').type("Your text here test");

  //   cy.wait(2000);

  //   cy.contains("button", "Review Application").click();
  //   cy.wait(2000);
  // }

  // submitApplication() {
  //   cy.contains("button", "Submit application").click();
  //   cy.wait(2000);
  //   // return to search job

  //   cy.contains("button", "Return to Job Search").click();
  //   cy.wait(2000);
  //   cy.scrollTo("bottom", { duration: 3000 });
  //   cy.scrollTo("top", { duration: 3000 });
  //   // cy.contains("a", "Jobs")
  //   //   .click()
  // }
}

export default ApplyJob;
