class CompaniesLandingPage{
    clickOnCompaniesHeader(){
cy.contains('a', 'Companies').click().should('be.visible').then($input =>{
    $input.css('border', '4px solid red')
})
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
    }
    findJobFilter() {
        cy.wait(2000);
        cy.get('input[placeholder="Search Jobs, skills, companies"]').as(
          "searchInput"
        );
        cy.get("@searchInput").type("Frontend Developer{enter}");
        cy.get('input[placeholder="Search city, state, or remote"]').type(
          "Cold Bay, AK, 99571{enter}"
        );
        cy.contains("button", "Search")
          .click()
          .should("be.visible")
          .then(($input) => {
            $input.css("border", "4px solid red");
          });
        // clear all filters
        cy.wait(2000);
        cy.go("back");
        cy.wait(2000);
      }

    companyDeatilsOverview(){
        cy.get('.grid > div.cursor-pointer').first().click('center')
        cy.wait(2000)
        // follow company 
        cy.get('button')
        .contains(/Follow(ing)?/)
        .click();
        cy.wait(3000)
        // unfollow company
        cy.get('button')
        .contains(/Follow(ing)?/).click();
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        //cy.scrollTo('top', { duration: 3000 })

    }
    reportCompany(){
        cy.contains('button', 'Report Company').click().should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        // radio button 
       cy.get('input[name="reason_id"]').first().check({ force: true });

        // enter the description of report of company 

        cy.get('textarea[name="description"]').type('This is my description text')
        // submit button
        cy.wait(2000)
        cy.contains('button', 'Submit Report').click();
        cy.wait(2000)
        // cy.contains('button', 'Submit').click({force: true}).should('be.visible').then($input =>{
        //     $input.css('border', '4px solid red')
        // })


        
       
    }
    
    aboutJobTab(){
        cy.scrollTo('top', { duration: 3000 })
        cy.contains('button', 'About').click({force: true}).should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })

        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
    }

    comapnyDetailjobTab(){
        cy.contains('button', 'Jobs').click({force: true}).should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
        
        // search job

        // cy.get('').type('').click()

        // save / unsave job

        // cy.get('').click()

    }

    reviewstab(){
        cy.contains('button', 'Reviews').click({force: true}).should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
    }
    
    writeReview(){
      cy.contains('button', 'Share Your Experience').click({force: true}).should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
        // star rating
        cy.get('input[name="interactive-rating"][value="5"]').check({ force: true })

        // Select "Former Employee"
cy.get('input[name="employmentStatus"][value="former"]').check({ force: true })

cy.get('input[placeholder="Type job title"]').clear().type('Software Engineer').click()
cy.get('input[placeholder="Select employment duration"]').click()                                
cy.get('ul[role="listbox"]').should('be.visible')   // wait for options to be visible
cy.get('ul[role="listbox"] > li').first().click() 
// Click arrow button to open dropdown
cy.get('input[placeholder="Type city, state, zip code"]')
  .type('Lahore');

cy.get('[role="listbox"] [role="option"]')
  .first()
  .click();

cy.get('textarea#review').type('This is my review text')
cy.get('textarea#pros').type('These are the pros...')
cy.get('textarea#cons').type('These are the cons...')
cy.get('textarea#advice').type('Management feedback is timely and constructive.')

// submit review
cy.contains('button', 'Submit Review').click()
cy.wait(5000)



       
    }

  




}
export default CompaniesLandingPage