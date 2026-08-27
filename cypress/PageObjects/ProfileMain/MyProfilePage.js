class MyProfile {
  profileheadericon() {
    // cy.get("svg.cursor-pointer").click();

    // // Re-query after the page changes
    // cy.get("svg.cursor-pointer")
    //   .should("be.visible")
    //   .then(($input) => {
    //     $input.css("border", "4px solid red");
    //   });

    cy.wait(2000);
    cy.contains("Dashboard")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
    // naviagte to my profile
  }
  Dashboardtab() {
    // cy.get('svg.cursor-pointer').click();
    cy.contains("Dashboard")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    // application tab in dashboard
    cy.get("button").contains("Applications").should("be.visible").click();
    cy.wait(2000);
    // cy.scrollTo("bottom", { duration: 6000 });
    // cy.scrollTo("top", { duration: 6000 });

    //saved jobs tab in dashboard
    cy.get("button").contains("Saved Jobs").should("be.visible").click();
    cy.wait(2000);
    // cy.scrollTo("bottom", { duration: 6000 });
    // cy.scrollTo("top", { duration: 6000 });
    
    // job alerts tab in dashboard
    cy.get("button").contains("Job Alerts").should("be.visible").click();
    cy.wait(2000);
    // cy.scrollTo("bottom", { duration: 6000 });
    // cy.scrollTo("top", { duration: 6000 });
   
    // setting tab in dashboard
    cy.get("button").contains("Settings").should("be.visible").click();
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });

   
  }

  visitMyProfilePage() {
    // profile tab in dashboard
    cy.contains("My Profile")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  JobAlertsPage() {
    // job alerts tab in dashboard
    cy.contains("Job Alerts")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    // cy.scrollTo("bottom", { duration: 6000 });
    // cy.scrollTo("top", { duration: 6000 });
  }

  visitSettingPage() {
    // setting tab in dashboard
    cy.contains("Settings")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });

      cy.get('img[alt="Jump Recruiter Logo"]').click();

  }

  // visitNotificationPage() {
  //   // notification tab in dashboard
  //   cy.contains("Notifications")
  //     .should("be.visible")
  //     .click()
  //     .should("be.visible")
  //     .then(($input) => {
  //       $input.css("border", "4px solid red");
  //     });
  //   cy.wait(2000);
  //   cy.scrollTo("bottom", { duration: 6000 });
  //   cy.scrollTo("top", { duration: 6000 });
  // }
  // connectJR() {
  //   cy.get('div.flex.items-center button[type="button"]').eq(0).click();
  //   cy.wait(2000);
  //   cy.get("button").contains("Yes, Confirm").click();
  //   cy.wait(2000);
  // }
  // editResume() {
  //   cy.contains("My Profile").should("be.visible").click();
  //   cy.wait(2000);
  //   cy.scrollTo("bottom", { duration: 4000 });
  //   cy.scrollTo("top", { duration: 4000 });
  // }

  editBasicInfo() {
    cy.get("button.MuiIconButton-root")
      .eq(0) // click the first one
      .click(); // click the first one

    cy.wait(2000);

    cy.get("button").contains("Cancel").click();
    cy.wait(2000);
  }

  editOtherInfo() {
    cy.get("button.MuiIconButton-root").eq(1).click();

    cy.wait(3000);
    cy.get("button").contains("Cancel").click();
    cy.wait(2000);
  }

  uploadResume(filePath) {
    cy.get('div.flex.items-center button[type="button"]').eq(0).click();

    cy.wait(2000);
    cy.get("").attachFile(filePath);
  }

  editSummary() {
    cy.get("button.MuiIconButton-root").eq(1).click({ force: true });

    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editEducation() {
    cy.wait(2000);
    cy.get("button.MuiIconButton-root").eq(2).click({ force: true });

    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }
  editExperience() {
    cy.wait(2000);
    cy.get("button.MuiIconButton-root").eq(4).click({ force: true });
    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editProjects() {
    cy.wait(2000);
    cy.get("button.MuiIconButton-root").eq(6).click({ force: true });
    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editCertificates() {
    cy.wait(2000);
    cy.get("#certificate")
      .find("button.MuiIconButton-root")
      .first()
      .click({ force: true });
    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editSkill() {
    cy.get("#skills")
      .find("svg")
      .filter((i, el) => el.outerHTML.includes("M3 21h3.75")) // matches edit icon path
      .first()
      .parents("button")
      .click({ force: true });
    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editLanguages() {
    cy.get("#languages")
      .find("svg")
      .filter((i, el) => el.outerHTML.includes("M3 21h3.75")) // matches edit icon path
      .first()
      .parents("button")
      .click({ force: true });
    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }
  editLinks() {
    cy.get("").click();
  }

  editHonors() {
    cy.wait(2000);
    cy.contains("h4", "Issue Date")
      .closest("div.border.rounded-lg") // Use `closest()` to get just one element
      .within(() => {
        cy.get("button").first().click(); // This works now
      });

    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editPublications() {
    cy.wait(2000);
    cy.contains("h4", "Publisher")
      .closest("div.border.rounded-lg") // Use `closest()` to get just one element
      .within(() => {
        cy.get("button").first().click(); // This works now
      });

    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editPatent() {
    cy.wait(2000);
    cy.contains("h4", "Patent No.")
      .closest("div.border.rounded-lg") // Use `closest()` to get just one element
      .within(() => {
        cy.get("button").first().click(); // This works now
      });

    cy.wait(2000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editAchievements() {  


cy.contains('h6', 'Achievements')                      // find the heading
  .closest('div.flex.items-center.justify-between')  // go up to container div
  .find('button[type="button"]')                      // find the button inside it
  .click()
    cy.wait(2000);


    cy.wait(3000);
    cy.get("button").contains("Save Changes").click();
    cy.wait(2000);
  }

  editExtracurriculars() {
    cy.contains("h6", "Extracurriculars")
      .parentsUntil(".bg-text-tertiary") // narrow traversal to parent container
      .parent()
      .find("button.MuiIconButton-root")
      .click();
    cy.wait(2000);
    cy.get("button").contains("Submit").click();
    cy.wait(2000);
  }

  editSecurityClearnce() {
  cy.contains('h6', 'Security Clearance level')
  // .parents('div.flex')                         // Navigate to wrapping flex container
  //  .find('button.MuiIconButton-root')           // Select the icon button
  .click()

    cy.wait(2000);
    cy.get("button").contains("Submit").click();
    cy.wait(2000);
  }

  editMilitaryInvolvement() {
    cy.contains("h6", "Military Involvement")
      .parentsUntil(".bg-text-tertiary") // narrow traversal to parent container
      .parent()
      .find("button.MuiIconButton-root")
      .click();
    cy.wait(2000);
    cy.get("button").contains("Submit").click();
    cy.wait(2000);
  }

  editWorkAuthorization() {
    cy.get("").click();
    cy.go("back");
  }

  editExecutiveSummary() {
    cy.get("").click();
    cy.go("back");
  }

  
}

export default MyProfile;
