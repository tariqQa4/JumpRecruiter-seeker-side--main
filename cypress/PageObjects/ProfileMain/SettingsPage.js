class SettingsPage {
  profileheadericon() {
    cy.get("svg.cursor-pointer").click();
    cy.contains("Dashboard").should("be.visible").click();
    cy.wait(2000);
  }
  visitSettingsPage() {
    cy.contains("Settings").should("be.visible").click();
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  // Account Setting

  changeAccountType() {
    cy.get("").click();
    cy.get("").click();
  }

  changeEmail() {
    cy.get("").click();
    // enter new email
    cy.get("").type("{randomemail}");
    //enter confirm email
    cy.get("").type();
    //save
    cy.get("").click();
  }

  addPhoneNumber() {
    cy.get("").click();
    cy.get("").type("+1234567890");
  }

  // Email Settings

  ApplicationStatus() {
    cy.get("").click();
    cy.get("").click();
  }

  recommendedJobsToggle() {
    cy.get("").click();
    cy.get("").click();
  }

  careerGuideToggle() {
    cy.get("").click();
    cy.get("").click();
  }

  unsubscribefromCommercialEmails() {
    cy.get("").click();
    cy.get("").click();
  }

  delteAccount() {
    cy.get("").click();
    //chose radio
    cy.get("").click();
    cy.get("").type("no");
    cy.get("").click();
  }
}
export default SettingsPage;
