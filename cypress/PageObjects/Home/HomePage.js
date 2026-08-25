class HomePage {
  visitHomePage() {
    cy.visit('https://stagging.jumprecruiter.us/');
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  findJobFilter() {
    // Type in the Job Title input
   cy.get('input[placeholder="Job title, keyword or company"]')
  .type('Software Engineer');
      

    
// cy.get('input[placeholder="City, State, or Remote"]')
//   .type('Karachi');
  
  cy.contains('button', 'Search Jobs').click()

        cy.wait(2000);
     
    cy.go("back");
    cy.wait(2000);

  
  }

 

  applyNow() {
    // cy.get('button.bg-green-primary').contains('Apply Now').click()
    cy.wait(2000);
    cy.go("back");
  }

  enterFullName() {
    cy.get('input[placeholder="Full Name"]').type("John Doe");
  }

  enterEmail() {
    cy.get('input[placeholder="Email"]').type("test@gmail.com");
    cy.get("button")
      .contains("Subscribe")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
  }

  // jobByLocation() {
  //   cy.wait(2000);
  //   cy.get('button[aria-label="Next slide"]').click({ multiple: true });
  //   cy.contains("span", "See All Jobs")
  //     .should("be.visible")
  //     .click({ force: true });

  //   cy.wait(2000);
  //   cy.scrollTo("bottom", { duration: 3000 });
  //   cy.scrollTo("top", { duration: 3000 });
  //   cy.go("back");
  // }



  aboutPage() {
    cy.wait(2000);
    cy.contains("a", "About").click();

    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  notfications() {
    cy.get("div.relative").eq(0).click({ force: true });

    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 500 });
    cy.scrollTo("top", { duration: 500 });
    cy.get("div.relative").eq(0).click({ force: true });
    //cy.get('.notification-close').click();
  }

  chatModel() {
    cy.get(".chat-icon").click();
    cy.get(".start-chat-button").click();
    cy.get(".chat-input").type("Hello there!");
    cy.get(".send-chat-button").click();
  }

  careerAdvice() {
    cy.contains('a', 'Resources').click();
    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 6000 });
    // cy.get(".view-more-articles").click();
  }

  ForEmployerpage() {
    cy.wait(2000);
    cy.contains("a", "For Employers").click();

    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  IndustRIESPAGE() {
    cy.wait(2000);
    cy.contains("a", "Industries").click();

    cy.wait(3000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
    // clikcl on logo
    cy.get ('img[alt="Jump Recruiter"]').click();
  }
  // careerAdviceListing() {
  //   cy.get(".career-advice-article").click();
  //   cy.wait(3000);
  //   cy.scrollTo("bottom", { duration: 6000 });
  //   cy.scrollTo("top", { duration: 6000 });
  //   cy.go("back");
  //   cy.go("back");
  //   cy.get(".read-another-article").click();
  // }

  // sigoutAccount() {
  //   cy.get('div.relative.group[tabindex="0"] svg.cursor-pointer').click();
  //   cy.wait(2000);
  //   // cy.get('div.relative.group[tabindex="0"] div').contains('My Profile').click().should('be.visible').then($input =>{
  //   //   $input.css('border', '4px solid red')
  //   // })
  //   cy.get("p.text-green-primary.underline").contains("Logout").click();
  // }
}

export default HomePage;
