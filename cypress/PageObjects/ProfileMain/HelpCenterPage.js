class HelpCenter{
    profileheadericon(){
       cy.get("svg.cursor-pointer").click();

    // Re-query after the page changes
    cy.get("svg.cursor-pointer")
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });

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
        
    
    
    visitMyHelpCenterPage(){
        cy.visit('')
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // job seeker side 

    }

    clickOnJobSeeker(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
    }

    searchbarHelpCenter(){
        cy.get('').type('')
        cy.get('').click()
    }

    myAcountSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }
    // submit a request or submit a case 
    submitArequest(){
        cy.get('').type('Tariq')
        cy.get('').type('Majeed')
        cy.get('').type('tariq@acrodoft.io')
        cy.get('').click()
        cy.get('').type('34541313145')
        cy.get('').click()
        cy.get('').click()
        cy.get('').type('testing purpose only ')
        cy.get('').click()
    }
    // About Job seeker  section 
    aboutJobSeekerSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // FAQs section 

    FAQsSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // company Page & Reviews 

    companyPageReviewsSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // Job Alerts section 

    JobAlertSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // Job Search Tips 

    jobSearchTipsSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // Jump Recruiter cv 

    jumpRecruiterCvSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // Applying for a Job 

    applyingForAjobSection(){
        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        // helpful info 

        cy.get('').click()

        // next question 

        cy.get('').click()
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        
    }

    // Tecnical Support 
    technicalSupportSection(){
        cy.get('').click()
        cy.get('').type('Tariq')
        cy.get('').type('Majeed')
        cy.get('').type('tariq@acrodoft.io')
        cy.get('').click()
        cy.get('').type('34541313145')
        cy.get('').click()
        cy.get('').click()
        cy.get('').type('testing purpose only ')
        cy.get('').click()
        
    }

    // Contact Support 

    ContactSupportSection(){
        cy.get('').click()
        cy.get('').type('Tariq')
        cy.get('').type('Majeed')
        cy.get('').type('tariq@acrodoft.io')
        cy.get('').click()
        cy.get('').type('34541313145')
        cy.get('').click()
        cy.get('').click()
        cy.get('').type('testing purpose only ')
        cy.get('').click()
        
    }

}

export default HelpCenter