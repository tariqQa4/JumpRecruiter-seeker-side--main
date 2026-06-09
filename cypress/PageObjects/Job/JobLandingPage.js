class JobLandingPage {
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
    
    cy.go("back");
    cy.wait(2000);
  }

  //Search Job Result

  emailAlertToogle() {
    cy.get("div.bg-text-tertiary").click();
    cy.wait(2000);
    // cy.contains('button', /create job alert/i).click();
    // cy.wait(2000)
    cy.get("#mui-component-select-job_title_id").click();
    cy.get('ul[role="listbox"] li').contains("Software Engineer").click();
    cy.get("#mui-component-select-location_id").click(); // open
    cy.get('ul[role="listbox"] li').contains("Cold Bay, AK, 99571").click();
    //Radio button
    cy.get('input[type="radio"][name="email_period"][value="daily"]').check({
      force: true,
    });
    // cy.get('input[type="radio"][name="email_period"][value="weekly"]').check({ force: true });
    // submit button
    cy.contains("button", "Submit").click();
    cy.wait(3000);
    cy.get("div.cursor-pointer").first().click({ force: true });
  }

  saveUnsaveJob() {
    // save job
    cy.contains("a", "Jobs").click();
    cy.wait(2000);
    cy.get("div.cursor-pointer svg")
      .should("exist")
      .first()
      .click({ force: true }).should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
  }

  // Job Details Page

  detailsjobapplyNow() {
    //click on Apply Job
    // cy.get('button.bg-green-primary').contains('Apply Now').click()
    cy.wait(2000);
    cy.go("back");
  }

  followCompany() {
    cy.get('div.group.cursor-pointer').first().click();

    cy.wait(4000);
    cy.get('button')
        .contains(/Follow(ing)?/)
        .click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
  
        cy.wait(2000)
        // unfollow company
        cy.get('button')
        .contains(/Follow(ing)?/).click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
  
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
  
  }

  reportJob() {
    cy.scrollTo("bottom", { duration: 6000 });
    // Select by button text exactly
cy.contains('button', 'Report This Job').click();
      // .should("be.visible")
      // .click({ force: true }).should("be.visible")
      // .then(($input) => {
      //   $input.css("border", "4px solid red");
      // });


    cy.get('input[name="reason_id"]').first().check({ force: true });

cy.get('textarea[placeholder="Please help us understand what’s wrong so we can take the right action."]')
  .clear()
  .type('This is additional info about the report.');
cy.contains('button', 'Submit Report').click();

    cy.wait(2000);
    //cy.get('div.ml-auto svg.cursor-pointer').click().click({force: true})
    // cy.get('div[role="alert"]').should('be.visible').contains('Your report has been submitted successfully.')
    // cy.scrollTo('top', { duration: 3000 })
  }
}
export default JobLandingPage;
