import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import MyProfile from '../../PageObjects/ProfileMain/MyProfilePage';

describe('MyProfile test suite', () => {
    const login = new Login()
    const profile = new MyProfile ()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);
      cy.viewport(2560, 1392)
      cy.visit('https://stagging.jumprecruiter.us/'); 
      
      cy.fixture('Login').then((data)=>{
      // Perform the login
      cy.contains('button', 'Sign In').click();
      login.enterEmail(data.Email)
      login.enterPassword(data.Password)

      login.loginButton()
      

      // Navigate to the Resume Builder landing page after login
      // cy.visit('/resume-builder'); // Adjust this URL according to your routing
      })
    });
    it(' Profile drop down and Dashbaord', () => {
       profile.profileheadericon()
       profile.Dashboardtab()
       profile.visitMyProfilePage()
         profile.JobAlertsPage()
         profile.visitSettingPage()
        //  profile.visitNotificationPage()
        //  profile.visitHelpCenterPage()
      
    
    })

   

    it('My Profile tab and edit Info  ', ()=>{
      cy.fixture('ResumeBuilder').then((data)=>{
      //  profile.editResume()
      //  profile.connectJR()
      //   profile.editBasicInfo()
       //profile.editOtherInfo()
      //  profile.uploadResume(data.filePath)
      //  profile.editSummary()
      //  profile.editEducation()
      //  profile.editExperience()
      //  profile.editProjects()
      //  profile.editCertificates()
      //  profile.editSkill()
      //  profile.editLanguages()
      //  profile.editHonors()
      //  profile.editPublications()
      //  profile.editPatent()
      //  profile.editAchievements()
      //  profile.editExtracurriculars()
      //  profile.editSecurityClearnce()
      //  profile.editMilitaryInvolvement()
        //  profile.editLinks()
      // 
      //  profile.editWorkAuthorization()
      // 
      //  profile.editExecutiveSummary(data.Summary)
      })
   
    

    })


   })

export default MyProfile