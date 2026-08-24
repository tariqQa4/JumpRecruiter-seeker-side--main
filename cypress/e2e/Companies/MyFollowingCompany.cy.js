import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import MyFollowingComapnyPage from '../../PageObjects/Companies/MyFollowingComapnyPage';
describe('companiesMy Folllowing test suite', () => {
    const login = new Login()
    const myFollowingpage = new  MyFollowingComapnyPage()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => 
        {
        Cypress.on('uncaught:exception', () => false);
        cy.viewport(2560, 1392)
        cy.visit(https://stagging.jumprecruiter.us/'); 
        
        cy.fixture('Login').then((data)=>{
        // Perform the login
        cy.contains('button', 'Log In').click();
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()
        cy.contains('a', 'Companies').click()

        // Navigate to the Resume Builder landing page after login
        //cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });

    it('job landing ',()=>{
        cy.fixture('ResumeBuilder').then((data)=>{
        // myFollowingpage.clickOnCompaniesHeader()
        myFollowingpage.clickOnMyFollowingTab
        myFollowingpage.companyDeatilsOverview()
        
        myFollowingpage.aboutJobTab()
        myFollowingpage.reviewstab()
        myFollowingpage.writeReview()
        myFollowingpage.reportCompany()

    })
})
})

export default MyFollowingComapnyPage