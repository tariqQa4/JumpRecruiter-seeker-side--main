class JobAlerts {
  clickOnJobHeader() {
    cy.contains("a", "Jobs")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 3000 });
    cy.scrollTo("top", { duration: 3000 });
  }

  clickOnJobAlertsTab() {
    cy.contains("button", "Job Alerts")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    // cy.scrollTo('bottom',{ duration: 3000 })
    // cy.scrollTo('top', { duration: 3000 })
    // click on create alert
  }
  //create job alert

  createJobAlert() {
    cy.contains("button", "Job Alerts")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    // cy.contains('button', 'Create Job Alert');
    // cy.get('button').contains('Create Job Alert').click();
    cy.contains("button", /create job alert/i).click();

    cy.wait(2000);
    cy.get('input[placeholder="Select designation"]').type("Manager");

    cy.get('ul[role="listbox"] li').contains("Marketing Manager").click();
    // location

    cy.get('input[placeholder="Select location"]').click(); // open
    cy.get('ul[role="listbox"] > li') // adjust selector based on actual dropdown list structure
      .first()
      .click();
    // cy.get('ul[role="listbox"] li').contains('Cold Bay, AK, 99571').click()
    cy.wait(2000);
    //Radio button
    cy.get('input[type="radio"][name="email_period"][value="daily"]').check({
      force: true,
    });
    cy.wait(2000);
    // cy.get('input[type="radio"][name="email_period"][value="weekly"]').check({ force: true });
    // submit button
    cy.contains('button', 'Set Job Alert').click();

    cy.wait(3000);

    // REMPOVE ALERT JOB MODEL
    cy.get("button").contains("Remove").first().click();
    cy.wait(2000);
    cy.contains("button", "Yes, delete").click();
    cy.wait(2000);
  }
}

export default JobAlerts;
