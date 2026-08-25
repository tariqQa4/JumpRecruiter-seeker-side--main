import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import SuggestedJob from '../../PageObjects/Job/SuggestedJobPage';

describe('Suggested job test suite', () => {
    const login = new Login()
    const suggestedjob = new SuggestedJob ()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        cy.viewport(2560, 1392)
        cy.visit('https://stagging.jumprecruiter.us/'); 
        
        cy.fixture('Login').then((data)=>{
        // Perform the login
        cy.contains('button', 'Log In').click();
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()
        cy.contains('a', 'Jobs').click()

        // Navigate to the Resume Builder landing page after login
        // cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });

    it('Suggested job  ',()=>{
        suggestedjob.clickOnJobHeader()
        suggestedjob.clickOnSuggestedTab()
        suggestedjob.findJobFilter()
        suggestedjob.saveUnsaveJob()
        
       
    })
})

export default SuggestedJob