import Login from "../../PageObjects/AuthenticationPage/LoginPage"

describe('Login As Job Seeker', ()=>{

beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Something went wrong')) {
          return false; 
        }
      });
cy.viewport(2560, 1392)
cy.visit('https://jumpresumebuilder.com/')
cy.viewport(2560, 1392)
cy.wait(2000)
cy.scrollTo('bottom',{ duration: 6000 })
cy.scrollTo('top', { duration: 6000 })
cy.contains('button', 'Sign In').click()

    
})
it('login with email', () =>{

    cy.fixture('Login').then((data)=>{
// cy.visit('')
// cy.viewport(2560, 1392)
        const ln = new Login
 

        ln.enterEmail(data.Email)
        ln.enterPassword(data.Password)
        ln.loginButton()
      
        // ln.verifyLogin()
     
      //delte profile
      // cy.get('button[type="button"]').contains('Edit Profile').click()
      // cy.get('button[type="button"]').eq(1)

    
      

      // cy.contains('button', 'Save Changes').click()

        cy.contains('button', 'Add New').click({force:true})
        cy.wait(2000)
        cy.contains('subtitle2', 'Begin from Scratch').click();

        cy.get('button.MuiButton-root[type="submit"]').contains('Next').click({force:true})

        // cy.contains('button', 'Next').click({force:true})
        cy.wait(2000)
        cy.contains('subtitle2', 'Start from scratch').click()
        cy.contains('button', 'Next').click()
        cy.contains('p', 'Start from scratch').click()
        cy.contains('button', 'Next').click()

        // basic info stepper
        cy.get('input[placeholder="Type full name"]').clear().type('Muhammad')
        cy.get('input[placeholder="Type last name"]').clear().type('Raza')
        cy.get('.MuiInputBase-root.MuiFilledInput-root').find('input[type="tel"]').type('Pakistan').click()
        cy.get('input[placeholder="Type street address"]').clear().type('Lahore,Punjab')
        cy.contains('button', 'continue').click()

        // other info stepper 
        // cy.wait(5000)
        cy.contains('button', 'continue').click()

        // Summary Stepper 

        cy.get('.MuiInputBase-input.MuiFilledInput-input[placeholder="Type summary"]').clear()
      
        cy.get('.MuiInputBase-input.MuiFilledInput-input[placeholder="Type summary"]').type('Detail oriented and highly skilled QA Tester with over years of experience in software testing, ensuring the quality and functionality of applications. Proficient in manual and automated testing methodologies, including creating and executing test plans, test cases, and scripts using tools like Selenium, Cypress, and JIRA. Strong ability to identify, document, and track defects to resolution, improving overall system performance. Adept at working collaboratively with cross-functional teams in agile environments to deliver high-quality software products.')
        cy.contains('button', 'continue').click()

        // Add Education stepper
        // cy.contains('button', 'Add').click()
        cy.get('input[placeholder="search level of education"]').type('Master').click()
        cy.get('input[placeholder="search field of study"]').type('Computer Science')
        cy.get('input[placeholder="search country"]').type('Pakistan');

        // Wait for the dropdown options to appear
        cy.get('ul[role="listbox"]').should('be.visible');
    
        // Click the "Pakistan" option in the dropdown
        cy.get('ul[role="listbox"]').contains('Pakistan').click();
        
     
        cy.get('input[placeholder="search institute"]').type('University of Engineering Technology')
        //cy.get('input[placeholder="search city, state, zip code"]').type('Lahore,Punjab,45000')
        cy.get('input[data-indeterminate="false"]').check()
        // cy.get('input#start_date').type()
        cy.get('#start_date').click(); // Or click the button
        cy.get('.react-datepicker__month-0 > .MuiBox-root').click();
        cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
        cy.contains('button', 'continue').click()
        cy.contains('button', 'continue').click()



        // Experience stepper 
        // cy.contains('button', 'Add').click()
        cy.get('input[placeholder="search job title"]').type('Software Engineer')
        cy.get('input[placeholder="search company name"]').type('Tech Corp')
        cy.get('input[placeholder="search country"]').type('Pakistan');
        cy.get('ul[role="listbox"]').should('be.visible');
        cy.get('ul[role="listbox"]').contains('Pakistan').click();
       //cy.get('input[placeholder="search city, state, postal code"]').type('Lahore,Punjab,45000');
        cy.get('input[name="currently_here"]').check();
        cy.get('#start_date').click(); // Or click the button
        cy.get('.react-datepicker__month-0 > .MuiBox-root').click();
        cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
        cy.contains('button', 'continue').click()
        cy.contains('button', 'continue').click()
    

        /// Project stepper 
        //cy.contains('button', 'Add').click()
        cy.get('input[placeholder="Type project name"]').type('Testing Automation of Jump Recruiter')
        cy.get('input[placeholder="search company"]').type('Acrosoft')
        cy.get('input[name="currently_here"]').check();
        cy.get('#start_date').click(); // Or click the button
        cy.get('.react-datepicker__month-0 > .MuiBox-root').click();
        cy.get('textarea[placeholder="Type summary"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
        cy.contains('button', 'continue').click()
        cy.contains('button', 'continue').click()



        // Certification stepper 

        // cy.contains('button', 'Add').click()
        cy.get('input[placeholder="search certificate or license"]').type('Cypress Automation', { delay: 200 })
        cy.wait(500)
        cy.get('input[placeholder="search issuing organization"]').type('10 Pearls University ', { delay: 200 })
        cy.get('input[name="forever"]').check()
        cy.get('#start_date').click()
        cy.get('.react-datepicker__month-0 > .MuiBox-root').click()
        cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
        cy.contains('button', 'continue').click()
        cy.contains('button', 'continue').click()


        //Publication Stepper 

     // cy.contains('button', 'Add').click()
     cy.get('input[placeholder="Type publication title"]').type('Exploring Cypress Testing')
     cy.get('input[placeholder="Type publisher"]').type('Tech Publications Inc')
     
     cy.get('input#publish_date').click()
     cy.get('.react-datepicker__day--001 > .MuiBox-root').eq(0).click(); // Select the first

    //  cy.get('.react-datepicker__month-0 > .MuiBox-root').click()
     cy.get('input[placeholder="Type publications url"]').type("https://publications.com");
     cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
     cy.contains('button', 'continue').click()
     cy.contains('button', 'continue').click()
     

     // Patent  stepper 

    // cy.contains('button', 'Add').click()
     cy.get('input[placeholder="Type title"]').type('The Great Book')
     cy.get('input[placeholder="Type patent number"]').type('12345678')
     cy.get('input[type="radio"][value="pending"]').click()
     cy.get('input[placeholder="Type patent url"]').type("https://patent.com")
     cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
     cy.contains('button', 'continue').click()
     cy.contains('button', 'continue').click()


     // Honor and Awards 

     // cy.contains('button', 'Add').click()
     cy.get('input[placeholder="Type full name"]').type("Employe of Month")
     cy.get('input[placeholder="search issuing organization"]').type('10 Pearls University ', { delay: 200 })
    //  cy.get('input[placeholder="select issue date"]')
     cy.get('#issued_date').click()
     cy.get('.react-datepicker__month-0 > .MuiBox-root').click()
     cy.get('textarea[placeholder="Type description"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
     cy.contains('button', 'continue').click()
     cy.contains('button', 'continue').click()



     // Skils stepper 


     // cy.contains('button', 'Add').click()
     cy.get('input[placeholder="Select skill"]').type('Manual Testing',{ delay: 500 })
     cy.get('button.MuiButton-outlinedPrimary[type="submit"]').contains('Add').click();



    
    //  cy.get('input[type="range"][aria-valuenow="2"]').slide()
     cy.get('input[placeholder="Select skill"]').type('Automation Testing',{ delay: 500 })
     cy.contains('button', 'Add').click()
    
     cy.contains('button', 'continue').click()
     cy.contains('button', 'continue').click()




     //Add Website /Links Stepper 
    // cy.contains('button', 'Add').click()
    cy.get('input[placeholder="Select platform"]').type('Git Hub')
    cy.get('input[placeholder="Enter url"]').type('https://github.com',{ delay: 500 })
    cy.contains('button', 'Add').click()
    
    cy.contains('button', 'continue').click()
    cy.get('button').contains('continue');



  // Hobby and interest 
     cy.contains('button', 'Add').click()
     cy.get('input[placeholder="Enter hobby"]').type('Reading',{delay:500})
     cy.contains('Add').click({force:true})

    //  cy.get('input[placeholder="Enter hobby"]').type('Content Writing')
    //  cy.contains('button', 'Add').click()
    cy.get('.MuiButton-containedPrimary').click();

     //cy.get('button').contains('continue');

     // Acheivemnets 

     cy.get('textarea[placeholder="Type achievement"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
     cy.contains('button', 'continue').click()

      // Extracurricular Activities 
      cy.get('textarea[placeholder="Type extracurricular"]').type('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli')
     cy.contains('button', 'continue').click()

      // work Authorization 
      cy.get('input[placeholder="search country"]').type('Pakistan',{delay:500}).click()
      cy.get('input[placeholder="search authorization type"]').type('Citizen',{delay:500}).click()
      cy.contains('button', 'Add').click()

      cy.contains('button', 'continue').click()


      // Military Involvemnt 

      cy.contains('button', 'finish').click()


      // preview profile

      cy.contains('button', 'Preview Profile').click();
      cy.scrollTo('bottom',{ duration: 6000 })
      cy.scrollTo('top', { duration: 6000 })

      /// finish resume 
      cy.contains('button', 'Finish Resume').click();
    

      // Dashbaord 

      cy.contains('button', 'Dashboard').click()









    })

    



})
})

export default Login