import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import HelpCenter from '../../PageObjects/ProfileMain/HelpCenterPage';
describe('HelpCenter test suite', () => {
    const login = new Login()
    const helpcenter = new HelpCenter ()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
        cy.viewport(2560, 1392);
        cy.visit('www.google.com'); 
       
        cy.fixture('ResumeBuilder').then((data)=>{
        // Perform the login
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()

        // Navigate to the Resume Builder landing page after login
        cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });
    it(' from scratch', () => {
       helpcenter.profileheadericon()
       helpcenter.visitMyHelpCenterPage()
       helpcenter.searchbarHelpCenter()
       
    })

    it(' My Account section ', () => {
        helpcenter.myAcountSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it(' FAQs section   ', () => {
        helpcenter.FAQsSection
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it(' About Job seeker section  ', () => {
        helpcenter.aboutJobSeekerSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it(' companies page & Reviews  section ', () => {
        helpcenter.companyPageReviewsSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it(' Job Alert section  ', () => {
        helpcenter.JobAlertSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it(' Job Search Tips  section ', () => {
        helpcenter.jobSearchTipsSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it('JumpRecruiter CV  ', () => {
        helpcenter.jumpRecruiterCvSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })
    
     it(' Applying For Job  ', () => {
        helpcenter.applyingForAjobSection()
        helpcenter.searchbarHelpCenter()
        helpcenter.submitArequest()
        
     })

     it('technical support section ', ()=>{
        helpcenter.technicalSupportSection()
     })

     it('contact  support section ', ()=>{
        helpcenter.ContactSupportSection()
     })











})

export default HelpCenter