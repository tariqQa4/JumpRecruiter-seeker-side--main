import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import SettingsPage from '../../PageObjects/ProfileMain/SettingsPage';

describe('Settings test suite', () => {
    const login = new Login()
    const settings = new SettingsPage ()
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
      

      // Navigate to the Resume Builder landing page after login
      // cy.visit('/resume-builder'); // Adjust this URL according to your routing
      })

    })
    it(' Dashbaord setting', () => {
        settings.profileheadericon()
        settings.visitSettingsPage()
        
    })

    it(' Account settings ', () => {
       
        settings.changeAccountType()
        settings.changeEmail()
        settings.addPhoneNumber()
        
    })

    it(' Email settings ', () => {
        settings.ApplicationStatus()
        settings.recommendedJobsToggle()
        settings.careerGuideToggle()
        settings.unsubscribefromCommercialEmails()
    
    })

    it ('delete account', ()=>{
        settings.delteAccount()
    })


})
export default SettingsPage