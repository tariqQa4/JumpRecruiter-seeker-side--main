import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import JobLandingPage from '../../PageObjects/Job/JobLandingPage';

describe('joblandingpage test suite', () => {
    const login = new Login()
    const joblanding = new JobLandingPage ()
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
     cy.contains('a', 'Jobs').click();

        cy.wait(2000);


        })
    });

    it('job landing ',()=>{

        joblanding.clickOnJobHeader()
        joblanding.findJobFilter()
        //joblanding.emailAlertToogle()
       
    })

    it('job details view', ()=>{
        
        
       joblanding.saveUnsaveJob()
       joblanding.followCompany()
       joblanding.reportJob()
    
})
})
export default JobLandingPage