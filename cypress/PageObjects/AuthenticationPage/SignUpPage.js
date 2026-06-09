class Signup {
  // signup page locator define

  //As Job Seeker
  clickAsJobSeeker(clickAsJobSeeker) {
    cy.wait(2000);
    cy.contains("button", "Decline").click();
    cy.wait(2000);
    cy.contains("button", "Register").click();
    // cy.get('input[placeholder="Type email address"]', { timeout: 10000 })
    //   .should("be.visible")
    //   .type("qa.tester@mailinator.com")
    //   .then(($input) => {
    //     $input.css("border", "3px solid red");
    //   });

    // cy.wait(1000);
    // cy.contains("button", "Continue", { timeout: 10000 }).click({
    //   multiple: true,
    // });

    cy.get('a[href="/register"]').should("be.visible").click();

    const randomEmail = `user_${Date.now()}@example.com`;

    cy.get('input[placeholder="Type email address"]', { timeout: 10000 })
      .should("be.visible")
      .type(randomEmail)
      .then(($input) => {
        $input.css("border", "3px solid red");
      });

    // cy.wait(1000);
    // cy.contains("button", "Continue", { timeout: 10000 }).click({
    //   multiple: true,
    // });
  }

  enterFullName(fullName) {
    cy.get('input[name="Your full name"]')
      .type(fullName)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  // enterLastName(LastName) {
  //   cy.get('input[name="last_name"]')
  //     .type(LastName)
  //     .should("be.visible")
  //     .then(($input) => {
  //       $input.css("border", "3px solid red");
  //     });
  // }

  createPassword(createPassword) {
    cy.get('input[placeholder="Create a secure password"]', { timeout: 10000 })
      .should("be.visible")
      .type(createPassword)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  confirmPassword(confirmPassword) {
    cy.get('input[placeholder="Re-enter password"]', { timeout: 10000 })
      .should("be.visible")
      .type(confirmPassword)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  clickSignupButton(clickSignupButton) {
    cy.contains("button", "Continue to Sign Up").should("be.visible").click();
    cy.wait(4000);
  }
  // First STEP - Choose to build profile
  FirstStepChoice() {
    cy.wait(2000);
    cy.contains("Complete Your Profile").click();
    cy.wait(2000);
  }

  StepperScratchprofile() {
    cy.wait(2000);
    cy.get('input[type="radio"][value="scratch"]').check({ force: true });
    cy.wait(2000);
    // cy.get('input[type="radio"][value="upload"]').check({ force: true });
    // cy.wait(2000)B[type="radio"][value="import"]').check({ force: true });
    cy.contains("button", "Continue", { timeout: 10000 }).click({
      multiple: true,
    });

    cy.wait(2000);
  }
  // Basic Information STEP
  BasicInformation() {
    // cy.get('input[name="basic_info.first_name"]').clear().type('John').should('be.visible').then($input =>{
    //       $input.css('border', '2px solid red')
    //   })
    //   cy.get('input[name="basic_info.last_name"]').type('Doe').should('be.visible').then($input =>{
    //       $input.css('border', '2px solid red')
    //   })
    // designation
    cy.get('input[placeholder="Select your designation "]').type(
      "Software Engineer{enter}"
    );
    cy.wait(2000);
    // cy.get('input[placeholder="Select your designation"]').click();
    // cy.get('ul[role="listbox"] li.MuiAutocomplete-option').first().click();
    // email
    // cy.get('input[placeholder="Type email address"]').type("qa.tester@mailinator.com");

    // phone number
    cy.get('input[placeholder="Add Phone Number"]')
      .clear()
      .type("+1 234 567 8901");
    cy.wait(2000);
    // cy.get('input[type="tel"]').type("12345678900");
    // cy.wait(2000);
    // country

    cy.get('input[placeholder="Type your country"]').click();
    cy.get('ul[role="listbox"] li').first().click();
    // postal code

    cy.get('input[placeholder="Type city, state, or postal code"]').click();
    cy.get(".MuiAutocomplete-popper li").first().click();
    cy.wait(2000);
    // cy.get('input[placeholder="Type city, state, or postal code"]').click();
    // cy.get('.MuiAutocomplete-popper li').first().click();

    // cy.get('ul[role="listbox"] li.MuiAutocomplete-option').first().click();
    // cy.wait(2000);

    cy.get('input[placeholder="Type your residential address here"]').type(
      "123 Main St"
    );
    cy.wait(2000);
    cy.contains("button", "Continue").click();

    cy.wait(2000);
  }
  //Summary STEP
  Summary() {
    cy.get('textarea[name="summary_data.summary"]:visible')
      .clear()
      .type(
        "A highly motivated and detail-oriented professional with expertise in [mention relevant field]. Proven ability to [mention key skills or accomplishments]. Seeking a challenging role where I can leverage my skills and experience to contribute to the success of a dynamic team."
      )
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
    cy.contains("button", "Continue").click();
    cy.wait(2000);
  }
  //Education STEP
  Education() {
    // add education
    cy.contains("button", "Add Details")
      .should("be.visible")
      .click({ force: true });

    cy.wait(2000);
    // level of education
    // Click into the autocomplete input
    cy.get('input[placeholder="Select your level of education"]').click({
      force: true,
    });

    // Wait for the dropdown options to render
    cy.get(".MuiAutocomplete-popper").find("li").first().click({ force: true });
    cy.wait(2000);
    // cy.get('input[placeholder="Select level of education"]').click();
    // cy.get('ul[role="listbox"] li').first().click();
    // cy.wait(2000);

    // field of study
    cy.get('input[placeholder="Select your field of study"]').click({
      force: true,
    });

    cy.get(".MuiAutocomplete-popper").find("li").first().click({ force: true });
    cy.wait(2000);
    // cy.get('input[placeholder="Select field of study"]').click();
    // cy.get('ul[role="listbox"] li').first().click();
    // cy.wait(2000);

    // Name of institute
    cy.get('input[placeholder="Select your institute"]').click({ force: true });

    cy.get(".MuiAutocomplete-popper").find("li").first().click({ force: true });
    cy.wait(2000);

    // cy.get('input[placeholder="Select institute"]').click();
    // cy.get('ul[role="listbox"] li').first().click();
    // cy.wait(2000);

    // country

    // cy.get('input[placeholder="Type country"]').click();
    // cy.get('ul[role="listbox"] li').first().click();
    // cy.wait(2000);

    // //city, state, postal code

    // cy.get('input[placeholder="Type city, state, postal code"]').click();
    // cy.get('ul[role="listbox"] li.MuiAutocomplete-option').first().click();
    // cy.wait(2000);

    // checkbox

    cy.get('input[name="currently_here"]').click({ force: true });
    cy.wait(2000);

    // start date

    cy.get('input[name="start_date"]').type("2020-01-01");
    cy.wait(2000);

    cy.contains("button", "Perfecting with AI").click({ force: true });
    cy.wait(25000);
    cy.get("button svg")
      .filter((index, el) =>
        el.outerHTML.includes("M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z")
      ) // Path for "+"
      .first()
      .parents("button")
      .should("be.visible")
      .click({ force: true });
    // cy.get('input[name="education[0].end_date"]').type("2022-01-01");
    cy.contains("button", "Save Changes").click();
    cy.wait(2000);

    cy.contains("button", "Continue").click();

    cy.wait(2000);
  }
  //Experience STEP
  Experience() {
    // Add experience
    cy.get("button").contains("Add Experience").click({ force: true });

    cy.wait(2000);

    // Check the "Are you fresher?" checkbox by its label
    // cy.contains('label', 'Yes, I am a fresher')
    //   .find('input[type="checkbox"]')
    //   .check({ force: true });

    // Fill "Job Title" autocomplete input by placeholder
    cy.get('input[placeholder="Type job title here"]').type(
      "Software Engineer"
    );

    // Fill "Company Name" autocomplete input
    cy.get('input[placeholder="Type the company name"]').type("OpenAI");

    // Check "Currently working here" checkbox
    cy.contains("label", "I currently work here.")
      .find('input[type="checkbox"]')
      .check({ force: true });
    cy.wait(2000);

    // Set Start Date and End Date inputs by name
    cy.get('input[name="start_date"]').type("2022-01-01");
    //cy.get('input[name="end_date"]').type('2023-01-01');

    // Fill Country input
    // cy.get('input[placeholder="Type country name here"]').click();
    // cy.get('ul[role="listbox"] li').first().click();
    // cy.wait(2000);

    // // Fill City, State, Postal Code input

    // cy.get('input[placeholder="Type city, state, postal code"]').click();
    // cy.get('ul[role="listbox"] li.MuiAutocomplete-option').first().click();
    // cy.wait(2000);

    // Fill Description textarea by ID
    cy.get(
      'div[contenteditable="true"][data-placeholder="Type your description here"]'
    )
      .should("be.visible")
      .click({ force: true })
      .type("This is my automated test description using Cypress.", {
        delay: 0,
      });
    cy.wait(2000);

    // Click "Save Changes" button
    // Submit the form by clicking the "Add Experience" button
    cy.contains("button", "Save Changes").click();

    cy.wait(2000);

    // Click "Continue" button
    cy.contains("button", "Continue").click();

    cy.wait(2000);
  }
  //Skills STEP
  Skills() {
    // cy.get('input[placeholder="Type skill"]').type('JavaScript{downarrow}{enter}');
    // cy.wait(2000);
    // cy.get('button').contains('Add Skill').click();
    // cy.wait(2000);
    // cy.get('input[placeholder="Type level"]').type('Expert{downarrow}{enter}');
    // cy.wait(2000);
    cy.contains("button", "Continue").click();

    cy.wait(2000);
  }
  //
  AdditionalInformation() {
    // Add additional information
    // cy.get("button").contains("Projects").click({ force: true });

    // cy.wait(2000);
    // cy.get('input[name="additional_info[0].title"]').type("Certifications").should('be.visible').then($input =>{
    //     $input.css('border', '2px solid red')
    // })
    // cy.get('textarea[name="additional_info[0].description"]').type("Certified in XYZ.").should('be.visible').then($input =>{
    //     $input.css('border', '2px solid red')
    // })
    // cy.contains('button', 'Continue').click();
    // cy.wait(2000)
    // cy.contains('button', 'Skip').click();
    // cy.wait(2000)
    cy.contains("button", "Finish")
      .should("be.visible")
      .and("not.be.disabled")
      .click({ force: true });

    cy.wait(2000);
    // go to job page
    cy.contains("button", "Start Job Search")
      .should("be.visible")
      .and("not.be.disabled")
      .click({ force: true });
  }

  //     cy.contains('button', 'Skip').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Continue').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Skip').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Skip').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Skip').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Skip').click();
  //     cy.wait(2000)
  //     cy.contains('button', 'Finish').click();
  //     cy.wait(2000)

  // }

  verifySignup() {
    // cy.get("").should('have.text' , "")
  }

  //signup with Google Account
  SignupwithGoogle(SignupwithGoogle) {
    //     cy.get("").click()
    // cy.get("").should('have.text' , "").click()
  }

  // signUpWithGoogle(){
  //  cy.intercept('GET', '**/auth/google/callback').as('googleCallback');
  //     cy.wait('@googleCallback').then((interception) => {
  //       // Check for successful redirection
  //       cy.url().should('include', '/dashboard');
  //     });
  // signupWithGoogleAlternate()
  //     // Option 2: Use real Google login (not ideal for CI tests due to the third-party interaction)
  //     // Handle the actual Google authentication flow
  //     cy.origin('https://accounts.google.com', () => {
  //       // Perform actions inside the Google login popup
  //       cy.get('input[type="email"]').type('your-email@gmail.com');
  //       cy.get('#identifierNext').click();
  //       cy.get('input[type="password"]').type('your-password');
  //       cy.get('#passwordNext').click();

  //     })
}

export default Signup;
