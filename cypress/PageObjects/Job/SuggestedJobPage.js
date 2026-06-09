class SuggestedJob{

    
    clickOnJobHeader(){
        cy.contains('a', 'Jobs').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
  
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 4000 })
        cy.scrollTo('top', { duration: 4000 })
    }

    clickOnSuggestedTab(){
        cy.contains('button', 'Suggested').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
  
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
    }

    findJobFilter(){
        cy.get('input[placeholder="Search Jobs, skills, companies"]').as('searchInput')
        cy.get('@searchInput').type('Frontend Developer{enter}')
        cy.get('input[placeholder="Search city, state, or remote"]').type('Cold Bay, AK, 99571{enter}')
        cy.contains('button', 'Search').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000);
      // clear all filters
        cy.go('back')
        cy.wait(2000)
    }

    saveUnsaveJob(){
        cy.contains("a", "Jobs").click();
        cy.wait(2000);
        cy.get("div.cursor-pointer svg")
          .should("exist")
          .first()
          .click({ force: true }).should("be.visible")
          .then(($input) => {
            $input.css("border", "4px solid red");
          });
        //cy.get('div.cursor-pointer').eq(0).click({force: true})  // or eq(1), eq(2) etc.
        cy.wait(2000);
        cy.get('a[href="/"] img[alt="Logo"]').click().should("be.visible")
        .then(($input) => {
          $input.css("border", "4px solid red");
        });
        cy.wait(2000);
    }


}
export default SuggestedJob