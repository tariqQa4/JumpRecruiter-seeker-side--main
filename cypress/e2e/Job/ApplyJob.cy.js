import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import ApplyJob from '../../PageObjects/Job/JobApplyPage';

describe('Apply Job Page  test suite', () => {
    const login = new Login()
    const applyjob = new ApplyJob ()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
        cy.viewport(2560, 1392)
        cy.visit('https://qa.jumprecruiter.com/'); 
        
        cy.fixture('Login').then((data)=>{
        // Perform the login
        cy.contains('button', 'Log In').click();
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()
        cy.wait(2000);
     cy.contains('a', 'Jobs').click();

        cy.wait(2000);
        // Navigate to the Resume Builder landing page after login
        // cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });

    it('it redirect to job search page and search job ',()=>{
        applyjob.clickOnJobHeader()
        applyjob.findJobFilter()
       
    })

    it('it apply job  ',()=>{
        applyjob.clickOnSpecificjob()
        applyjob.applyNow()
        //applyjob.selectResume()
        applyjob.enterJobQuestions()
        //applyjob.submitApplication()
       
    })


})
export default ApplyJob