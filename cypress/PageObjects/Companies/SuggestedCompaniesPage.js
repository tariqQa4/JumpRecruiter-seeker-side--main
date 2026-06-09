class SuggestedCompaniesPage{

    clickOnCompaniesHeader(){
        cy.contains('a', 'Companies').click().should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
                cy.wait(2000)
                cy.scrollTo('bottom',{ duration: 3000 })
                cy.scrollTo('top', { duration: 3000 })
            }

    clickOnSuggestedTab(){
        cy.contains('button', 'Suggested').click().should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.scrollTo('top', { duration: 3000 })
        cy.wait(2000)
    }

    findJobFilter(){
        cy.get('input[placeholder="Search Jobs, skills, companies"]').as('searchInput')
        cy.get('@searchInput').type('Frontend Developer{enter}')
        cy.get('input[placeholder="Search city, state, or remote"]').type('Cold Bay, AK, 99571{enter}')
        cy.contains('button', 'Search').click().should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
      // clear all filters
        cy.go('back')
        cy.wait(2000)
    }

    companyDeatilsOverview(){
        cy.get('div.cursor-pointer.border-gray-300.rounded-lg.p-5').first().click().should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.wait(2000)
        // follow company 
        cy.get('button')
        .contains(/Follow(ing)?/)
        .click();
        cy.wait(2000)
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
        cy.contains('label', 'Spam').click()
        // enter the description of report of company 

        cy.get('textarea[name="description"]').type('This is my description text')
        // submit button
        cy.wait(2000)
        cy.contains('button', 'Submit').should('be.visible').click({force: true}) 
        cy.wait(2000)
        
        // cy.get('div[role="alert"]').should('be.visible').contains('Your report has been submitted successfully.')
       

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
        cy.contains('button', 'Overview').click({force: true}).should('be.visible').then($input =>{
            $input.css('border', '4px solid red')
        })
        cy.scrollTo('bottom',{ duration: 3000 })
        cy.get('input[placeholder="Type Review Title*"]').type('Great product!');
        cy.get('textarea[placeholder="Share details of your experience"]').type('I had a fantastic experience...');
        cy.contains('button', 'Submit').click();
        cy.wait(2000)
       
    }

    

}
export default SuggestedCompaniesPage