import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import AppliedJob from '../../PageObjects/Job/AppliedJobPage';

describe('Applied job test suite', () => {
    const login = new Login()
    const appliedjob = new AppliedJob ()
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
        cy.contains('a', 'Jobs').click()

        })
    });

    it('Suggested job  ',()=>{
        appliedjob.clickOnJobHeader()
        appliedjob.clickOnMyJobTab()
        appliedjob.clickOnAppliedJobTab()
        appliedjob.findJobFilter()
        // appliedjob.jobdetails()
        appliedjob.viewSimilarjob()
        
       
    })
})

export default AppliedJob